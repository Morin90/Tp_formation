<script>
import { mapState } from 'pinia'
import { useCounterStore  } from './stores/counter'
import {ElDetails} from './components/ElDetails .vue';


export default {
    name: "ElListPage",
    components: {
    ElDetails
},
    computed: {
        ...mapState(useCounterStore, ["getToDoList"])
    }
}
</script>
<template>
    <section class="container row">
        <ElementToDoList
            v-for="el in getTodolist"
            :key="el.id"
            :el="el"
            class="col-4"
        />
    </section>
</template>