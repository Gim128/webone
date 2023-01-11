<template>

  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
        {{ title }}
    </a>
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
    </svg>

    <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
            <div v-for="(item, i) in items" :key="i" class="menu-item">
                <a :href="item.link">{{ item.title }}</a>
            </div>
        </div>
    </transition>
  </div>

</template>

<script>
export default {
    name: "DropdownMenu",
    props: [
        'title',
        'items'
    ],
    data(){
        return{
            isOpen: false
        }
    }
}
</script>

<style>
    nav .menu-item .sub-menu {
        position: absolute;
        background-color: #222;
        top: calc(100% + 18px);
        left: 50%;
        transform: translateX(-50%);
        width: 95px;
        border-radius: 0px 0px 16px 16px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s ease-out;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

</style>