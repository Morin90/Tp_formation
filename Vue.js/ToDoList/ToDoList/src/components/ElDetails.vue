<script>

export default {
name: "ElDetails",
props: {
    product: {
    type: Object,
    default: null,
    },
}
};
</script>

<template>
<article 
    v-if="product != null"
    class="card" 
    style="width: 18rem;"
>
    <img src="..." class="card-img-top" alt="...">
    <section class="card-body">
    <h3 class="card-title">{{ el.status }}</h3>
    <p class="text-muted">{{ el.description }}</p>

    </section>
</article>
<section
    v-else
    class="card" 
    style="width: 18rem;"
>
    <img src="..." class="card-img-top" alt="...">
    <h3 >Pas créé</h3>
</section>
</template>