<template>
    <button @click="deleteBook">Confirmar deleção</button>
</template>

<script>
    import axios from 'axios';

    export default{
        props:{
            bookID: Number,

        },
        methods: {
            async deleteBook(){
                try{
                   await axios.delete(`http://127.0.0.1:8000/api/books/${this.bookID}`);
                   this.$emit('book-deleted');

                }catch(error){
                    console.error('Error deleting book ', error);
                }
            },
        }
    }
</script>