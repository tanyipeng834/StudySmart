<template>
  <div>
    <div class="container-fluid p-0 main">
      <Topbar :tabs="tabs" menuTitle="Forum" />
      <div class="row">
        <div class="col-4">
          <Sidebar :haveTopbar="true" />
        </div>
        <div class="col-4"></div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
};
</script>
