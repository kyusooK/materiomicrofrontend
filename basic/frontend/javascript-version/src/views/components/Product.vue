<template>
    <div>
        <String label="ItemName" v-model="value.itemName" :editMode="editMode"/>
        <Number label="Stock" v-model="value.stock" :editMode="editMode"/>

        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>
    </div>
</template>


<script>

import BaseEntity from './base-ui/BaseEntity.vue'
import String from './primitives/String.vue'
import Number from './primitives/Number.vue'

export default {
    name: 'Product',
    mixins:[BaseEntity],
    components:{
        String,
        Number,
    },
    
    data: () => ({
        path: "products"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>
