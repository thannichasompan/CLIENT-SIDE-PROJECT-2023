<script setup>
const screenC ="w-full h-full w-screen h-screen font-mono  flex justify-center items-center flex-col"
</script>
 
<template>
<div>
    <div :class="screenC" >
        <slot name="screenC"></slot> 
    </div>
</div>
</template>
 
<style scoped>

</style>