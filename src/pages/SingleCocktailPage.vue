<script>
import axios from 'axios';

export default {
    data() {
        return {
            cocktail: null
        }
    },
    created() {
        const slug = this.$route.params.slug;
        this.fetchCocktail(slug);
    },
    methods: {
        async fetchCocktail(slug) {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/cocktails?slug=${slug}`);
                this.cocktail = response.data[0];
            } catch (error) {
                console.error('Errore durante il recupero del cocktail:', error);
            }
        }
    }
}
</script>

<template>
    <div v-if="cocktail">
        <h1>{{ cocktail.name }}</h1>
        <img :src="cocktail.image" :alt="cocktail.name" />
        <p>{{ cocktail.instruction }}</p>
        <ul>
            <li v-for="ingredient in cocktail.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
    </div>
    <div v-else>
        <p>Caricamento in corso...</p>
    </div>
</template>

<style lang="scss" scoped></style>
