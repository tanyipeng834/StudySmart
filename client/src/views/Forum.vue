<template>
  <div>
    <div class="container-fluid ms-5">
        
      <div class="row">
        <div class="col-1">
          <Sidebar
            :haveTopbar="false"
            profileName="Tan Yi Peng"
            profileRole="Secondary 3 Student"
          />
        </div>

        <div class="col-1">
          <div></div>
        </div>

        <div class="col-5 mt-3">
          <div class="row">
            <div class="col">
              <div>
                
                <div class="input-group rounded">
                  <input
                    type="search"
                    class="form-control rounded mb-3"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span
                    class="input-group-text border-0 mb-3"
                    id="search-addon"
                  >
                    <i class="fas fa-search"></i>
                  </span>

                  <div class="container-fluid mt-100">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="card mb-4">
                          <div class="card-header">
                            <div
                              class="media flex-wrap w-100"
                            >
                             
                             <div>
                                <h3>Help with chem</h3>
                                <span class="badge rounded-pill text-bg-info">Chemistry </span> <span class="badge rounded-pill text-bg-info">Secondary 3 </span> <span class="badge rounded-pill text-bg-info">Express </span> 
                             </div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="media-body me-3">
                                <a href="javascript:void(0)" data-abc="true"
                                  >Tom Harry</a
                                >
                                <div class="text-muted small">13 days ago</div>
                              </div><br>
                            
                            <p>
                
                                
                              Can someone help me with Ionic Equations before I
                              kms?
                            </p>
                          </div>
                          <div
                            class="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3"
                          >
                            <div class="px-4 pt-3">
                              <a
                                href="javascript:void(0)"
                                class="text-muted d-inline-flex align-items-center align-middle"
                                data-abc="true"
                              >
                                <i class="fa fa-heart text-danger"></i>&nbsp;
                                <span class="align-middle">445</span>
                              </a>
                              <span
                                class="text-muted d-inline-flex align-items-center align-middle ml-4"
                              >
                              </span>
                            </div>
                            <div class="input-group my-3 mx-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter something..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <div class="input-group-append">
                                <button
                                  class="btn btn-primary"
                                  type="button"
                                >
                                  Comment
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-5 ">
     
            <div class="row"> <div >
                <div class="card" style="width: 18rem; margin-top: 110px;">

<div class="card">
  <div class="card-header">
    Filter by
  </div>
  </div>
  <ul class="list-group list-group-flush p-1">
    <li class="list-group-item"><strong>Year</strong> <br>
    <div class="form-check">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Secondary 1
      </label>
      <br>
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Secondary 2
      </label>
      <br>
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Secondary 3
      </label>
      <br>
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Secondary 4
      </label>
      <br>
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Secondary 5
      </label>
    </div>

    </li>
    <li class="list-group-item"><strong>Subject</strong> <br>
    <div class="row">
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Chinese
      </label>
        </div>
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        English
      </label>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        A Math
      </label>
        </div>
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        E Math
      </label>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Physics
      </label>
        </div>
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Chemistry
      </label>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Biology
      </label>
        </div>
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Literature
      </label>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        History
      </label>
        </div>
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Social Studies
      </label>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Geography
      </label>
        </div>
        <div class="col">
            <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        POA
      </label>
        </div>
    </div>
       </li>
    <li class="list-group-item">
        <strong>Stream</strong>
        <div class="row">
            <div class="col">
                <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Express
      </label>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Normal Academic
      </label>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
        Normal Technical
      </label>
            </div>
        </div>
    </li>
  </ul>
</div>
            </div></div>
           

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Navigation/Sidebar.vue";
export default {
  name: "Forum",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.search {
  margin-left: 282px;
}
</style>
