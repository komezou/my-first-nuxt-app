<template>
  <section class="container">
    <div>
      <h3>Nuxtjsのタグがつけられた投稿の一覧</h3>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          <h4>
            <span>{{ item.title }}</span>
            <small>
              <span>by&nbsp;</span> 
                <nuxt-link :to="`/users/${item.user.id}`">
                  {{ item.user.id }}
                </nuxt-link>
              </small>
          </h4>
          <div>
            {{ item.body.slice(0, 130) }}......
          </div>
          <p><a target="_blank" v-bind:href="item.url">{{ item.url }}</a></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    async asyncData({ store }) {
      if (store.getters['items'].length) {
        return
      }
      await store.dispatch('fetchItems');
    },
    computed: {
      ...mapGetters(['items'])
    }
  }
</script>

<style>
.container {
  min-height: 100vh;
  padding: 16px;
}
h3 {
  margin: 16px 0px;
  padding: 8px 0px;
  border-bottom: solid 1px #e5e5e5;
}
li + li {
  margin: 16px 0px;
}
p {
  margin: 8px 0px;
}
</style>


