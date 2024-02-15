<script>
    export default {
        name: "MainLayout"
    }
</script>

<template>
    <div class="container">
        <header
            v-if="$slots.header"
            class="p-3 mb-3 border-bottom"
        >
            <slot name="header"></slot>
        </header>
        <main>
            <slot v-if="$slots.default"></slot>
        </main>
        <footer class="border border-dark border-1 rounded-3 p-2 mt-4 bg-light" style="width:100%; text-align: center;">
            <slot
                v-if="$slots.footer"
                name="footer"
            ></slot>
            <br>
            <br>
                <i class="fa-brands fa-youtube" style="font-size: 100%;">             Ma chaine youtube</i>
                <br><br>
                <i class="fa-brands fa-instagram" style="font-size: 100%;">           Mon insta</i>
                <br><br>
                <i class="fa-brands fa-twitter" style="font-size: 100%;">             Mon twitter</i>
                <br><br>
                <i class="fa-brands fa-facebook" style="font-size: 100%;">            Mon facebook</i>
        </footer>
    </div>
</template>