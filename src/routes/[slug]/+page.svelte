<script>
    export let data;
</script>


{#each data.props.data as item}
     <!-- content here -->
     {item.name}
{/each}