<script >
import MainLayout from './components/Layout/MainLayout.vue'
import elementToDoList  from './components/elementToDoList.vue'
export default {
  name: 'App',
  components: {
    MainLayout,
    elementToDoList
  }
}
</script>

<template>
  <main-layout>
    <template #header>
      <elementToDoList/>
    </template>
    

    <template #footer>
      
    </template>
  </main-layout>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
    height: 100%;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    height: 0;
  }

  /*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  position: absolute;
  z-index: -1;
  height: 100%;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
  height: 0;
}
.slide-fade-leave-to {
  display: none;
}
</style>