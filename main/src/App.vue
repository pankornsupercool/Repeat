<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |||
    <router-link to="/aboutevent">Event Detail</router-link> |||
    <router-link to="/aboutme">About Learner</router-link>
  </div>
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color:azure;
  text-decoration: none;
  font-size:25px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  /* background-image: url(./images/wallgreen.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover; */
  background-color:#2c3e50;
}
</style>
