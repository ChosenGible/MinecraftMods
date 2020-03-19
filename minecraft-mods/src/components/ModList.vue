<template>
    <div class="wrapper">
        <div class="mods">
            <div class="mod" v-for="mod in mods" :key="mod.id">
                <div class="image">
                    <img :src="imagePath(mod)">
                </div>
                <div class="info">
                    <h1>{{ mod.name }}</h1>
                    <h2>by {{ mod.author }}</h2>
                    <p>{{ mod.descr }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mod_image_1 from '@/assets/mod_image_1.jpg';
import mod_image_2 from '@/assets/mod_image_2.jpg';
import mod_image_3 from '@/assets/mod_image_3.jpg';
import mod_image_4 from '@/assets/mod_image_4.jpg';
import mod_image_5 from '@/assets/mod_image_5.jpg';
import mod_image_6 from '@/assets/mod_image_6.jpg';
import mod_image_7 from '@/assets/mod_image_7.jpg';
import mod_image_8 from '@/assets/mod_image_8.jpg';
import mod_image_9 from '@/assets/mod_image_9.jpg';
export default {
    name: 'ModList',
    props: {
        mods: Array
    },
    methods: {
        imagePath(mod){
            if (mod.id === 1){
                return mod_image_1;
            }
            else if (mod.id === 2){
                return mod_image_2;
            }
            else if (mod.id === 3){
                return mod_image_3;
            }
            else if (mod.id === 4){
                return mod_image_4;
            }
            else if (mod.id === 5){
                return mod_image_5;
            }
            else if (mod.id === 6){
                return mod_image_6;
            }
            else if (mod.id === 7){
                return mod_image_7;
            }
            else if (mod.id === 8){
                return mod_image_8;
            }
            else if (mod.id === 9){
                return mod_image_9;
            }
            
        }
    }

}
</script>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mods {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
    }

    .mod {
        width: 33%;
        display: flex;
        flex-direction: column;
        padding-top: 5%;
    }

    .image {
        width:80%;
        max-width: 80%;
        max-height: 200px;
        height: 200px;
        object-fit: cover;
    }

    .mod img {
        border: 2px solid #333;
        height: 250px;
        width: 100%;
        object-fit: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
        width: 80%;
        background: lightgray;
        border: solid 1px #333;
        align-items: center;
    }

    .info p {
        width: 80%;
        text-align: center;
        justify-content: flex-start;
    }


</style>