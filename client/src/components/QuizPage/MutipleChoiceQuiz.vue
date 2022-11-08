<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <h3>The big knowledge test!</h3>
      <p>How good is your general knowledge?</p>
    </div>

    <div class="card border-info mb-4">
      <div
        class="d-flex justify-content-between align-items-center card-header bg-info text-white"
        id="h1"
      >
        <span>Question 1</span>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#q1"
          aria-expanded="false"
          aria-controls="q1"
          class="btn btn-outline-light"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-chevron-down"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      <div id="q1" class="collapse show" aria-labelledby="h1">
        <div class="card-body">
          <p>Philology is the</p>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="q1"
              id="q1_r1"
              value="r1"
            />
            <label class="form-check-label" for="q1_r1"> study of bones </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="q1"
              id="q1_r2"
              value="r2"
            />
            <label class="form-check-label" for="q1_r2">
              study of muscles
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="q1"
              id="q1_r3"
              value="r3"
            />
            <label class="form-check-label" for="q1_r3">
              study of architecture
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="q1"
              id="q1_r4"
              value="r4"
            />
            <label class="form-check-label" for="q1_r4">
              science of languages
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{

    name:'MutipleChoiceQuiz',
    
}



</script>

<style scoped></style>
