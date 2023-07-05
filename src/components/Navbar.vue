<script></script>

<template>
  <nav class="navbar navbar-expand-lg bg-black cover fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ms-3 mb-2 mb-lg-0 flex-grow-0">
          <li class="nav-item">
            <a class="button-navbar" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="button-navbar" aria-current="page" href="#"
              >Game of Trones</a
            >
          </li>
        </ul>
        <form class="d-flex ms-auto" role="search">
            <div class="input-group">
                <button type="submit" class="input-group-text">
                    <span class="material-symbols-sharp"> search </span>
                </button>
                <input
                  class="form-control me-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
            </div>
        </form>
      </div>
    </div>
  </nav>
</template>
