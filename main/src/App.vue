<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/aboutevent" class="disabled">Event Detail</router-link> 
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
  padding-left: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a.disabled {
  pointer-events: none;
  cursor: default;
  color:#2c3e50 !important;
}

#nav a:hover{
  color: #42b983;
  text-shadow: 1px white;
}
body {
  background-image: url(./images/wallnice.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* background-color:#2c3e50; */
}
</style>
