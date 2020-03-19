<template>
  <div id="app">
    <div id="header">
      <img src="../images/mod-page-title.png">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link to="/installations">HowTo</router-link>
      </div>
    </div>
    <div id="content">
      <router-view/>
    </div>
    <div id="footer">
      <a href="https://github.com/ChosenGible/MinecraftMods">---My github---</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 15px;
}

#header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
}

#content {
  min-height: 68vh;
}

#nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 40%;
}

body {
   background-image: url("../images/dirt-background.png");
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #3380c9;
}

#footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 5vh;
}

#footer a:visited {
  color: lightblue;
}
</style>
