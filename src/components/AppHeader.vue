<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid d-flex">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                   <li class="nav-item">
                    <router-link :to="{ name: 'Home'}" class="nav-link">Home</router-link>
                   </li>
                   <li class="nav-item">
                    <router-link :to="{ name: 'single-cocktail'}" class="nav-link">Single Cocktail</router-link>
                   </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>