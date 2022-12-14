<template>
  <v-app v-if="!loading">
    <v-app-bar app flat class="main" height="80">
      <div class="">
        <div class="d-flex align-center">
          <div class="mx-2 subtitle-1 font-weight-medium">{{$vuetify.lang.t(`$vuetify.${$route.name}`)}}</div>
          <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
        </div>
      </div>
      <v-spacer/>
      <div class="">
        <v-btn icon small >
          <v-icon size="20">mdi-account-circle</v-icon>
        </v-btn>
        <v-menu open-on-hover bottom offset-y min-width="130">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              small
              v-bind="attrs"
              v-on="on"
              class="mx-1"
            >
              <v-icon size="20">mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-sheet class="pa-2 caption font-weight-bold text-center">
            {{$vuetify.lang.t('$vuetify.TRANSLATION')}}
          </v-sheet>
          <v-list dense >
            <v-list-item v-for="(item, i) in locales" :key="i" link @click="translate(item.value)">
              <v-list-item-title class="subtitle-2">{{item.name}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app floating width="250" class="drawer">
      <template v-slot:prepend>
        <div class="d-flex justify-center">
          <v-img :src="require('@/assets/images/logo.png')" max-height="100" max-width="120" />
        </div>
        <hr class="mx-4">
        <v-list class="px-3">
          <v-list-group class="">
            <template v-slot:activator>
              <v-avatar size="28">
                <v-img :src="require('@/assets/images/profile-picture.png')"></v-img>
              </v-avatar>
              <v-list-item-title class="mx-3 body-2 grey--text text--darken-2 font-weight-medium">{{$vuetify.lang.t('$vuetify.Provider')}}</v-list-item-title>
            </template>
            <v-list-item class="ml-3" @click="logout" link >
              <v-icon size="18">mdi-toggle-switch-variant-off</v-icon>
              <v-list-item-title class="mx-3 body-2 grey--text text--darken-2 font-weight-medium">{{$vuetify.lang.t('$vuetify.Logout')}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
         
        <hr class="mx-4">
      </template>
      
      <v-list flat class="px-3 rounded-lg">
        <section v-for="(link, i) in $links" :key="i">
          <v-list-item v-if="link.children.length==0"
          :class="!link.role.includes(user.category.category.category) ? 'd-none' : 'd-flex align-center'"
          exact
          active-class="#555 rounded-lg"
          link
          :to="{name: link.route}">
            <v-icon size="18" :color="$route.name === link.route ? 'success' : '#666'">{{link.icon}}</v-icon>
            <v-list-item-title class="mx-3 body-2 font-weight-medium"
            :class="$route.name === link.route ? 'success--text' : 'grey--text text--darken-2'"
            >{{$vuetify.lang.t(`$vuetify.${link.name}`)}}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else color="#fff" 
          :class="!link.role.includes(user.category.category.category) ? 'd-none' : 'block'"
          >
            <template v-slot:activator>
              <v-icon size="18" :color="$route.name === link.route ? 'success' : '#666'">{{link.icon}}</v-icon>
              <v-list-item-title class="mx-3 body-2 font-weight-medium"
              :class="$route.name === link.route ? 'success--text' : 'grey--text text--darken-2'"
              >{{$vuetify.lang.t(`$vuetify.${link.name}`)}}</v-list-item-title>
            </template>
            <v-list-item v-for="(child, j) in link.children" 
              :key="j" 
              class="ml-3"
              :to="{name: child.route}"
              exact-path
              :class="!child.role.includes(user.category.sub_category) ? 'd-none' : 'd-flex align-center'"
              :disabled="!child.role.includes(user.category.sub_category)"
            >
              <v-icon size="16" :color="$route.name === link.route ? 'success' : '#666'">{{child.icon}}</v-icon>
              <v-list-item-title class="mx-3 body-2 font-weight-medium"
              :class="$route.name === child.route ? 'success--text' : 'grey--text text--darken-2'"
              >{{child.name}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </section>
      </v-list>
    </v-navigation-drawer>
    <v-main class="main">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <v-footer app absolute inset height="70" class="main">
      <div class="body-2 font-weight-medium secondary-2--text">Sheqaa@2022</div>
      <v-spacer/>
      <div class="body-2 font-weight-medium secondary-2--text">Help and Support</div>
    </v-footer>
  </v-app>
  <Loading v-else/>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import Vue from 'vue'
import Loading from '@/components/Loading.vue';
import { useAuthStore } from '@/store/auth';
export default Vue.extend({
  components: { Loading },
  data: () => ({
    loading: true,
    drawer: null,
    locales: [
      { name: 'English', value: 'en' },
      { name: 'Arabic', value: 'ar' },
    ],
    lang: 'en'
  }),
  computed: {
    ...mapState(useAuthStore, ['user']),
  }, 
  mounted() {
    this.$vuetify.lang.current = localStorage.getItem('lang')
    if(localStorage.getItem('rtl')) {
      this.$vuetify.rtl = localStorage.getItem('rtl') == 'false' ? false : true
    } else {
      this.$vuetify.rtl = false
    }
    this.auth()
      .then(res => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions(useAuthStore, ["logout", "auth"]),
    translate(val) {
      console.log(val);
      this.$vuetify.lang.current = val
      localStorage.setItem('lang', val)

      if(val == 'ar') {
        localStorage.setItem('rtl', true)
        this.$vuetify.rtl = true
      }else {
        localStorage.setItem('rtl', false)
        this.$vuetify.rtl = false
      }

      const to = this.$router.resolve({ params: {locale: val} })
      this.$router.push(to.location)
    
    }
  },
})
</script>