<template>
    <v-container my-15>
        <v-row justify="center">
            <v-col lg="12" sm="3" xs="1" class="text-center">
                <v-subheader class="heading text-h4 justify-center"
                style="font-weight: bold;     padding-bottom: 19px;"
                >CNT Eco-System</v-subheader>
                <p style="margin-bottom: -3px;">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, velit!
                </p>
            </v-col>

            <v-col lg="12" sm="3" xs="1">
                <div class="text-center d-flex align-center">  
                    <v-col lg="4" sm="1">
                        
                        <img src="../assets/crown.png" alt="">
                        <div>
                            <v-chip @click="activePortfolio = 'webapp' " :color="activePortfolio === 'webapp' ? '#1e90ff':'' " class="mx-5" style="color: white;">Lorem, ipsum dolor 01</v-chip>
                        </div>
                        <h3>Lorem, ipsum dolor</h3>
                        <p class="desc-one">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nisi!
                        </p>
                    </v-col>

                    <v-col lg="4" sm="1">
                        
                        <img src="../assets/crown.png" alt="">
                        <div>
                            <v-chip @click="activePortfolio = 'crypto' " :color="activePortfolio === 'crypto' ? '#1e90ff':'' " class="mx-5" style="color: white">Lorem, ipsum dolor 02</v-chip>
                        </div>
                        <h3>Lorem, ipsum dolor</h3>
                        <p class="desc-two">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nisi!
                        </p>
                    </v-col>

                    <v-col lg="4" sm="1">
                        
                        <img src="../assets/crown.png" alt="">
                        <div>
                            <v-chip @click="activePortfolio = 'coin' " :color="activePortfolio === 'coin' ? '#1e90ff':'' " class="mx-5" style="color: white">Lorem, ipsum dolor 03</v-chip>
                        </div>
                        <h3>Lorem, ipsum dolor</h3>
                        <p class="desc-three">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nisi!
                        </p>
                    </v-col>

                </div>
            </v-col>


                <slot v-if="activePortfolio === 'webapp' ">
                    <v-col lg="3" sm="1" xs="1" v-for="(web, webindex) in webApps" :key="webindex">
                        <v-card>
                            <v-img
                              :src="web.image"
                              class="white--text align-end"
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              height="200px"
                            >
                              <v-card-title>{{ web.title }}</v-card-title>
                            </v-img> 
                          </v-card>
                    </v-col>
                </slot>

                <slot v-if="activePortfolio === 'crypto' ">
                    <v-col lg="3" sm="1" xs="1" v-for="(crypto, cryptoindex) in cryptoApps" :key="cryptoindex">
                        <v-card>
                            <v-img
                              :src="crypto.image"
                              class="white--text align-end"
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              height="200px"
                            >
                              <v-card-title>{{ crypto.title }}</v-card-title>
                            </v-img>  
                          </v-card>
                    </v-col>
                </slot>

                <slot v-if="activePortfolio === 'coin' ">
                    <v-col lg="3" sm="1" xs="1" v-for="(coin, coinindex) in coinApps" :key="coinindex">
                        <v-card>
                            <v-img
                              :src="coin.image"
                              class="white--text align-end"
                              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              height="200px"
                            >
                              <v-card-title>{{ coin.title }}</v-card-title>
                            </v-img> 
                          </v-card>
                    </v-col>
                </slot>

        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "PortfolioView",

    data(){
        return{
            activePortfolio: 'webapp',
            webApps:[
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/closeup-golden-bitcoin-dark-reflective-surface-histogram-decreasing-crypto_1268-19908.jpg?w=1380&t=st=1671705816~exp=1671706416~hmac=e37e7803e30351c218528af58f868f01a65eaf9119e98850c4045c54834e3012'},
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/blockchain-technology-background-gradient-blue_53876-124648.jpg?w=1380&t=st=1671705847~exp=1671706447~hmac=2c47843952eef8d2f4cb054e139d3a92422d433b69affb55b43a5dd50af91b50'},
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074560.jpg?w=1380&t=st=1671705915~exp=1671706515~hmac=33115d4d75789afedd4ab2672ab0230aad618dfa008a5d36add509e42551dbd2'},
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/closeup-shot-pile-cryptocurrency-cash-golden-coins_181624-57537.jpg?w=1380&t=st=1671705939~exp=1671706539~hmac=0ef127cb7fcf15ac87034eb7bc0f77c1f1147119b8c531afb222dda16c50edd5'},
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/rows-stacks-cryptocurrency-coins-wooden-table_211682-66.jpg?w=1380&t=st=1671706102~exp=1671706702~hmac=2fb657acde425fc99a2c9d879a122569aede6645427a3c085dda7e643e14f652'},
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/beautiful-cryptocurrency-hologram-design_23-2149250206.jpg?w=1380&t=st=1671706163~exp=1671706763~hmac=b0119c9b1c9ea2bab93a0badfd2352105d860ebaecc1bd0261b5c8d4d2b4bc52'},
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/beautiful-cryptocurrwncy-concept_23-2149250208.jpg?w=1380&t=st=1671706249~exp=1671706849~hmac=9907656b97fba251f56e1f65ebcf96d6ac2125c7099e5fd9de2588c09121f56a'},
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/beautiful-cryptocurrwncy-concept_23-2149250212.jpg?w=1380&t=st=1671706269~exp=1671706869~hmac=97b508cbcd0500b8eed7562e3d8019a503b50c15856a6db30aabab09bc48bb9a'},
                {title: 'Web App 1', image:'https://img.freepik.com/free-photo/woman-dropping-banknotes-into-jar-with-rolled-banknotes-table-papers-table_1268-17482.jpg?w=1380&t=st=1671706281~exp=1671706881~hmac=e540b30f96ee32d36edbf70c35af426c7816f3a66a86471921a8734b2102be9e'},
            ],
            cryptoApps:[
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/mobile-phone-app-streaming-music_53876-98082.jpg?w=1380&t=st=1671706459~exp=1671707059~hmac=816abf7c278c5392f17454cc25d10b9fa34f98b75cb89ae207048371f6f9c165'},
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/discussing-mobile-app_1098-18640.jpg?w=1380&t=st=1671706483~exp=1671707083~hmac=c1688609a4630d39e79ac5a6d3c61abae04297b5999310013856dd71082bd7f7'},
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/close-up-man-s-hand-using-his-mobile-phone_1134-53.jpg?w=1380&t=st=1671706500~exp=1671707100~hmac=257c60eaf7ad78b2b196607dfd26ea748cd77447d9c1ff83cdfc25cbf7398e35'},
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/athletic-woman-using-her-smartphone_53876-96953.jpg?w=1380&t=st=1671706532~exp=1671707132~hmac=9bc8c690781f578c9c89671203ee20f7158e16472c74ec588bd6e85bfa204679'},
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/flat-lay-business-concept_53876-24738.jpg?w=1380&t=st=1671706546~exp=1671707146~hmac=8e5c2df618feb767e9df93dc4249a3fd7886349e66c17e2c35c4c5eb6cbbd3e8'},
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/group-people-working-website-template_53876-25068.jpg?w=1380&t=st=1671706563~exp=1671707163~hmac=ea45529b1c6b9cfd21793d196627c1aa8957440974b968a0400385edd45cc329'},
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/hands-holding-smartphone-close-up_23-2149168656.jpg?w=1380&t=st=1671706579~exp=1671707179~hmac=9a5ac987c0b025f5083cc22ec706e687ff65823c8f4581cd78b349d81093e4aa'},
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149153407.jpg?w=1380&t=st=1671773327~exp=1671773927~hmac=b81d1944d3d298501223d6c3035076914c1b2e3915c22444e251fe70f11d76eb'},
                {title: 'crypto1', image:'https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=1380&t=st=1671773587~exp=1671774187~hmac=dc023fc30d0bd1c3c4e3b73cbeca9564a33aeb4921b2d135669eec2ab381c9ab'},
            ],
            coinApps :[
                {title: 'coin03', image:'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=1380&t=st=1671772909~exp=1671773509~hmac=5fda877bae49df10d2b773bb2352634ee2b056faa2d09e3ccf344cda2932d70d'},
                {title: 'coin03', image:'https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=1380&t=st=1671772928~exp=1671773528~hmac=f839e86f1d0b228c62a1f905dc9a460bff08d11864a8608953ce5c59309fad16'},
                {title: 'coin03', image:'https://img.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg?w=1380&t=st=1671772948~exp=1671773548~hmac=675bcf296d895a706f5c068eb5987ef21a44ffdb768faa41dceadebeac77d6a8'},
                {title: 'coin03', image:'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=1380&t=st=1671772968~exp=1671773568~hmac=28c7ec71c9078b9adb63d346938f9226e46967c8404c1b250e1efcb7d64e15f8'},
                {title: 'coin03', image:'https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=1380&t=st=1671773092~exp=1671773692~hmac=dc7a14215cc167a923d1fee791e668ed1ab0104c6e75ac204ff952bb9f12148c'},
                {title: 'coin03', image:'https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-104247.jpg?w=1380&t=st=1671773141~exp=1671773741~hmac=9f69f61292aec470c17401484cce8e88ea2bca58a0721fbcb5732133aaf2c8c2'},
                {title: 'coin03', image:'https://img.freepik.com/free-photo/hologram-projector-screen-with-cloud-system-technology_53876-108502.jpg?w=1380&t=st=1671773186~exp=1671773786~hmac=0749fc624fe9582cc480dd27b96a8b6555b5bc7221c76145283c40904ce8d600'},
                {title: 'coin03', image:'https://img.freepik.com/free-photo/rendering-abstract-futuristic-background-with-glowing-neon-blue-orange-lights_181624-19807.jpg?w=1380&t=st=1671773206~exp=1671773806~hmac=70c44b9fe48a45f4a8b51fb5284bf3491733bf63af5d691c1652f684ec2136d8'},
                {title: 'coin03', image:'https://img.freepik.com/free-photo/close-up-hand-holding-futuristic-screen_23-2149126945.jpg?w=1380&t=st=1671773243~exp=1671773843~hmac=07407e90bd6e580ad9c27528ac1d078761c49a6136d16a1a5e459ccf2d3105e2'},
            ]
        }
    }
}
</script>

<style scoped>
   
</style>