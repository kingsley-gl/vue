<template>
  <input
    type="file"
    :name="$parent.name"
    :id="$parent.id || $parent.name"
    accept="*"
    @change="change"
    :webkitdirectory="$parent.directory && $parent.mode === 'html5'"
    :multiple="$parent.multiple && $parent.mode === 'html5'"
  />
  <!--mpp格式-->
  <!--application/vnd.ms-project-->
</template>
<script>
export default {
  methods: {
    change(e) {
      this.$destroy()
      this.$parent.addInputFile(e.target)
    }
  }
}
</script>
