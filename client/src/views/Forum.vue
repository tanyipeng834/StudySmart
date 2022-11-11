<template>
  <div>

    <div class="container-fluid p-0 main">
      <Topbar :tabs="tabs" menuTitle="Forum" />
      <div class="row">
        <div class="col-4">
          <Sidebar :haveTopbar="true" />
        </div>
        <div class="col-4 ">

        </div>
        <div class="col-4 ">

        </div>
      </div>

      <div class="row">


        <div class="col-2">

        </div>


        <div class="col-lg-5 mt-3 col-md-5 col-sm-5 order-5 pt-3">
          <div class="row">
            <div class="col">
              <!-- <div class="input-group rounded">
                <input v-model="search" class="form-control rounded mb-3" placeholder="Search post by username!"
                  aria-label="Search" aria-describedby="search-addon" />
                <button @click="searchUserPost()" class="input-group-text border-0 mb-3" id="search-addon">
                  <i class="fas fa-search"></i>
                </button>
              </div> -->
              <div class="col mb-3">
                <div class="form-group mb-3">
                  <label for="exampleFormControlTextarea1">Enter a question:</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    v-model="postContent"></textarea>
                </div>
              </div>
              <div class="row bg-white pt-2 mb-3">
                <div class="col-4 text-center mb-3">
                  <p>Choose a subject:</p>
                  <div class="dropdown">
                    <select class="rounded bg-secondary text-white" v-model="subject">
                      <option value="English">English</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Elementary Math">Elementary Math</option>
                      <option value="Additional Math">Additional Math</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="History">History</option>
                      <option value="Geography">Geography</option>
                      <option value="Social Studies">Social Studies</option>
                      <option value="Principles of Account">
                        Principles of Account
                      </option>
                      <option value="Literature">Literature</option>
                    </select>
                  </div>
                </div>
                <div class="col-4 text-center">
                  <p>Choose a stream!</p>
                  <div>
                    <select class="bg-secondary rounded text-white mb-3" v-model="stream">
                      <option value="Express">Express</option>
                      <option value="Normal Academic">Normal Academic</option>
                      <option value="Normal Technical">Normal Technical</option>
                    </select>
                  </div>
                </div>
                <div class="col-4 d-flex justify-content-center mb-3 align-middle">
                  <div>
                    <button class="btn btn-primary px-4" @click="addPost()">
                      Post
                    </button>
                  </div>
                </div>
              </div>

            </div>


            <div class="row">
              <div class="col">
                <div class="container-fluid mt-2">
                  <div class="row">
                    <div class="col-md-12 ms-2 ">
                      <div v-for="post in posts" :key="post" class="card mb-4">
                        <div class="card-header d-flex justify-content-between ">

                          <div class="row align-items-center">
                            <div class="col">


                              <span class="badge rounded-pill text-bg-info me-1">{{ post.subject }}
                              </span>
                              <span class="badge rounded-pill text-bg-info me-1">{{ post.level }}
                              </span>
                              <span class="badge rounded-pill text-bg-info me-1">{{ post.stream }}
                              </span>
                            </div>
                          </div>


                          <button v-if="post.username==name" class="btn" @click="deletePost(post)">
                            <i class="fa-regular fa-trash-can"></i>
                            <!-- <button class="btn btn-secondary m-2" @click="deletePost(index)" v-if="post.username==name"> -->
                            Delete
                            <!-- <span @click="deletePost(index)" v-if="post.username==name"
                                      class="badge pill text-bg-secondary p-2 justify-content-end m-2"> Delete
                                    </span> -->
                            <!-- </button> -->
                          </button>



                        </div>
                        <div class="card-body">
                          <div class="media-body me-3">
                            <div class="d-flex  align-items-center justify-content-start ">
                              <div class="profile-wrap bg-secondary"><img class="profile-img" src="../assets/cat.svg"
                                  alt=""></div>
                              <h5 class="m-0 ms-1">{{
                              post.username
                            }}</h5>
                            </div>
                            <div class="text-muted small">
                              {{ daysDifference(post) }}
                            </div>
                          </div>
                          <br />

                          <p>
                            {{ post.postContent }}
                          </p>
                          <div>
                            <button class="btn btn-block p-0" @click="addLike(post)">
                              <span v-if="!LikedPost.includes(post.id)" class="small"><i
                                  class="fa-regular fa-heart "></i> Like</span>
                              <span v-else class="small"><i class="fa fa-heart text-danger"></i> Liked</span>
                            </button>
                          </div>

                          <div>
                            <span class="">{{ post.numLikes }} have liked this</span>
                          </div>
                        </div>
                        <div
                          class="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                          <div class="w-100">
                            <div v-for="comment in post.comments" :key="comment" class="card my-2">
                              <div class="card-body">
                                <span class="badge rounded-pill bg-secondary">{{
                                comment.username
                              }}</span>
                                {{ comment.content }}
                              </div>
                            </div>
                          </div>

                          <div class="input-group my-3 mx-3">
                            <input type="text" class="form-control" placeholder="Enter something..."
                              aria-label="Recipient's username" aria-describedby="basic-addon2"
                              v-model.lazy="commentContent" />

                            <div class="input-group-append">
                              <button class="btn btn-primary" type="button" @click="addComment(post)">
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
        <div class="col-lg-4 col-md-4 col-sm-4 order-md-last order-2">
          <div class="row">
            <div class="col d-flex justify-content-center">
              <div class="card" style="width: 18rem; margin-top: 110px">
                <div class="card">
                  <div class="card-header">Filter by</div>
                </div>
                <ul class="list-group list-group-flush p-1">
                  <li class="list-group-item">
                    <div class="input-group-sm">
                      <strong>Username</strong> <br />
                      <input type="text" v-model="search" class="form-control ">
                    </div>


                  </li>
                  <li class="list-group-item">

                    <strong>Year</strong> <br />
                    <div class="dropdown">
                      <select class="rounded bg-secondary text-white" v-model="yearChosen">
                        <option value="Secondary 1">Secondary 1</option>
                        <option value="Secondary 2">Secondary 2</option>
                        <option value="Secondary 3">Secondary 3</option>
                        <option value="Secondary 4">Secondary 4</option>
                        <option value="Secondary 5">Secondary 5</option>
                      </select>
                    </div>


                  </li>

                  <li class="list-group-item">
                    <strong>Subject</strong> <br />

                    <div class="dropdown">
                      <select multiple class="rounded bg-secondary text-white" v-model="subjectChosen">
                        <option value="English">English</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Elementary Math">Elementary Math</option>
                        <option value="Additional Math">Additional Math</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="History">History</option>
                        <option value="Geography">Geography</option>
                        <option value="Social Studies">Social Studies</option>
                        <option value="Principles of Account">
                          Principles of Account
                        </option>
                        <option value="Literature">Literature</option>
                      </select>
                    </div>



                  </li>
                  <li class="list-group-item">
                    <strong>Stream</strong> <br>
                    <div class="dropdown">
                      <select class="rounded bg-secondary text-white" v-model="streamChosen">
                        <option value="Express">Express</option>
                        <option value="Normal Academic">Normal Academic</option>
                        <option value="Normal Technical">Normal Technical</option>
                      </select>
                    </div>


                  </li>
                  <li class="list-group-item text-center d-flex justify-content-start">
                    <button class="btn btn-primary" @click="filter()">
                      Submit
                    </button>
                    <button class="btn btn-primary ms-2" @click="clearFilter()">
                      Clear
                    </button>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomBar class="bottomnav" />
  </div>
</template>
<script>
  import Sidebar from "../components/Navigation/Sidebar.vue";
  import Topbar from "../components/Navigation/Topbar.vue";
  import BottomBar from "../components/Navigation/BottomBar.vue"

  import {
    auth,
    db
  } from "../main";
  import {
    getFirestore,
    doc,
    updateDoc,
    getDoc,
    getDocs,
    setDoc,
    collection,
    addDoc,
    deleteDoc,
    deleteField,
    arrayUnion,
    arrayRemove,
    onSnapshot,
    query,
    where,
    increment
  } from "firebase/firestore";
  export default {
    name: "Forum",
    components: {
      Sidebar,
      Topbar,
      BottomBar
    },
    data() {
      return {
        tabs: [],

        posts: [],
        postContent: "",
        subject: "",
        stream: "",
        name: '',
        commentContent: "",
        search: "",
        yearChosen: '',
        subjectChosen: [],
        streamChosen: "",
        tabs: [],
        LikedPost: [],
        postIDs: [],
        email: '',
        level: '',
        allPosts: [],
      };
    },
    mounted() {
      this.init().then()


    },
    methods: {
      clearFilter() {
        this.init()
        this.search = ''
        this.subjectChosen = []
        this.streamChosen = ''
        this.yearChosen = ''
      },
      async init() {

        var email = localStorage.getItem("email");
        this.email = email
        if (email) {
          const q = doc(db, "users", email)
          onSnapshot(q, (doc) => {


            this.name = doc.data().profile.fullName
            this.level = doc.data().profile.schoolGrade
            this.LikedPost = doc.data().LikedPost
          });
        } else {
          window.location.href = '#/login'
        }
        const q = query(collection(db, "posts"))
        const getPosts = onSnapshot(q, (querySnapshot) => {
          const posts = [];
          querySnapshot.forEach((doc) => {
            if (doc.id != 'ignore') {
              var newData = doc.data()
              newData["id"] = doc.id
              posts.push(newData);
              this.postIDs.push(doc.id)

            }

          })
          this.posts = posts
          this.allPosts = posts



        });
      },
      async searchUserPost() {


        var resultPosts = []
        for (let post of this.allPosts) {

          if (post.username == this.search) {
            console.log(`username: ${post.username}`)
            console.log(`search: ${this.search}`)
            resultPosts.push(post)
          }
        }
        this.posts = resultPosts





      },
      async addLike(post) {
        let id = post.id
        const ref = doc(db, "posts", id);
        console.log(this.LikedPost)
        if (!this.LikedPost.includes(id)) {


          await updateDoc(ref, {
            numLikes: increment(1)
          });
          await updateDoc(doc(db, "users", this.email), {
            LikedPost: arrayUnion(id),
          });

        } else {
          await updateDoc(doc(db, "users", this.email), {
            LikedPost: arrayRemove(id)
          })

          await updateDoc(ref, {
            numLikes: increment(-1)
          });
        }


      },
      async addComment(post) {
        // need to retrieve current's user username
        let id = post.id
        const ref = doc(db, "posts", id);

        await updateDoc(ref, {
          comments: arrayUnion({
            content: this.commentContent,
            username: this.name
          })
        });



        // var index = this.posts.indexOf(post);
        // var username = "hardcoded";
        // var newComment = {
        //   content: this.commentContent,
        //   username: username
        // };
        // this.posts[index].comments.push(newComment);
        this.commentContent = "";
      },
      async addPost() {


        var newPost = {};
        var errorMsg = ''
        if (this.postContent == '') {
          errorMsg = errorMsg + 'Please enter a question! \n'
        }
        if (this.subject == '') {
          errorMsg = errorMsg + 'Please choose a subject! \n'
        }
        if (this.stream == '') {
          errorMsg = errorMsg + 'Please choose a stream! \n'
        }
        if (this.stream == '' || this.subject == '' || this.postContent == '') {
          alert(errorMsg)
        } else {


          newPost.postContent = this.postContent;
          newPost.subject = this.subject;
          newPost.stream = this.stream;
          // var date = new Date().toLocaleDateString();

          // var day = date.slice(0, 2);
          // var month = date.slice(3, 5);
          // date = month + "/" + day + date.slice(5);
          const date = new Date()
          let day = date.getDate()
          let month = date.getMonth() + 1
          let year = date.getFullYear()
          let dateStr = `${month}/${day}/${year}`
          this.date = dateStr
          newPost.date_added = date;
          newPost.comments = [];
          newPost.numLikes = 0
          this.posts.unshift(newPost);

          await addDoc(collection(db, "posts"), {
            postContent: this.postContent,
            username: this.name,
            date_added: this.date,
            // date_added: new Date().toLocaleString().split(",")[0],
            level: this.level,
            stream: this.stream,
            comments: [],
            numLikes: 0,
            subject: this.subject
          }).then(() => {
            console.log('succes')
          })

          this.postContent = ''
          this.subject = ''
          this.stream = ''
          // Add a new document in collection "cities"

        }
      },
      async deletePost(post) {
        var posts = this.posts
        // posts.splice(index, 1)
        let id = post.id
        console.log(id)
        await deleteDoc(doc(db, "posts", id)).then(() => {
          console.log('deleted')
        })
        await updateDoc(doc(db, "users", this.email), {
          LikedPost: arrayRemove(id)
        })


      },

      filter() {
        var allPosts = this.allPosts
        var chosenFilters = [this.yearChosen, this.subjectChosen, this.streamChosen, this.search]
        var postKeys = ['level', 'subject', 'stream', 'username']
        for (let i = 0; i < postKeys.length; i++) {
          if (chosenFilters[i].length != 0) {
            const result = allPosts.filter(ele => {
              return ele[postKeys[i]]==chosenFilters[i]
            })
            allPosts=result
          }

        }
        this.posts=allPosts
      },

      daysDifference(post) {
        var index = this.posts.indexOf(post);
        let date_added = new Date(this.posts[index].date_added);
        // console.log(date_added)
        let today = new Date();
        let difference = date_added.getTime() - today.getTime();
        let daysDifference = Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));
        if (daysDifference == 0) {
          return "Today";
        }

        return parseInt(daysDifference) + " days ago";
      },

    },
  };
</script>

<style scoped>
  /* .search {
    margin-left: 282px;
  } */


  .main {
    margin-top: 60px;
    background-color: #eaf1f5;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;

  }

  .profile-wrap {
    /* border-radius: 50%; */
    display: inline-block;
    border-radius: 50%;
    aspect-ratio: 1;
    display: flex;

  }

  .profile-img {
    padding: 1em;

  }

  .bg-secondary {
    background-color: #F2F2F2 !important;
    color: black !important;
  }

  .btn-primary {
    background-color: #253F63 !important;
    color: white !important;
    border-color: #253F63 !important;
  }
</style>