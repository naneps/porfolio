  <template >
  <section class="pt-5 flex">
    <div class="flex flex-wrap m-auto">
      <div class="w-full min-h-full self-center px-4 lg:w-1/2 m-auto">
        <h1 class="text-base font-semibold ">Hallo🤚, I'm <span class="block font-bold text-primary  text-4xl">Nandang
            Eka Prasetya</span> </h1>
        <h1 class="font-medium text-slate-500 mb-5">Random Programmer</h1>
        <p class="leading-relaxed text-slate-400 mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Commodi ex ratione earum quo hic quis suscipit cupiditate ducimus itaque incidunt.</p>
        <a href="#"
          class="bg-secondary rounded-full px-5 py-2 shadow-md hover:bg-neutral hover:border-2 hover:border-primary hover:text-primary transition duration-300 ease-in-out">Here
          Me!</a>
      </div>

      <div class="w-full self-center px-4 lg:w-1/2">
        <div class="mt-10 ">
          <div class="h-[250px] md:h-[450px] lg:h-[600px] flex">
            <div class="m-auto">
              <div class="card lg:w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img :src="'src/' + profile.avatar" class="" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Nanns</h2>
                  <p>Try Everythink will be the way it's okay</p>
                  <div class="card-actions">
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                      <div class="collapse-title text-xl font-medium">
                        See My Stats
                      </div>
                      <div class="collapse-content transition duration-300 ease-in-out">
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=naneps&langs_count=9" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
import Avatar from '../components/Avatar.vue'
import Avatar1 from '../components/Avatar.vue';
export default {
  data() {
    return {
      profile: {
        name: 'Nandang Eka Prasetya',
        avatar: 'assets/image/im.png'
      }
    };
  },
  components: { Avatar, Avatar1 }
}
</script>
<style >
</style>