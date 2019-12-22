export default function({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      // 509fa693bdfb533b89fffb8a07d925e88f5edaed
      config.headers.common['Authorization'] = process.env.QIITA_TOKEN
    }
    return config
  })
}