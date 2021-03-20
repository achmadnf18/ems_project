<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin | EMS Project</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo site_url() ?>assets/vendor/fontawesome-free/css/all.min.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="<?php echo site_url() ?>assets/vendor/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="<?php echo site_url() ?>assets/vendor/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="<?php echo site_url() ?>assets/vendor/datatables-buttons/css/buttons.bootstrap4.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo site_url() ?>assets/vendor/adminLTE/css/adminlte.min.css">
  <link rel="stylesheet" href="<?php echo site_url() ?>assets/css/my-style.css">
  <link rel="stylesheet" href="<?php echo site_url()?>assets/css/jquery.toast.css">
  <link rel="stylesheet" href="<?php echo site_url()?>assets/vendor/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
  <link rel="stylesheet" href="<?php echo site_url()?>assets/vendor/sweetalert2/sweetalert2.min.css">
  
  <script src="<?php echo site_url() ?>assets/vendor/jquery/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="<?php echo site_url() ?>assets/js/bootstrap.bundle.min.js"></script>
    <!-- DataTables  & Plugins -->
    <script src="<?php echo site_url() ?>assets/vendor/moment/moment.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables-responsive/js/dataTables.responsive.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables-buttons/js/dataTables.buttons.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/jszip/jszip.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/pdfmake/pdfmake.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/pdfmake/vfs_fonts.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables-buttons/js/buttons.html5.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables-buttons/js/buttons.print.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/datatables-buttons/js/buttons.colVis.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
    <script src="<?php echo site_url() ?>assets/vendor/sweetalert2/sweetalert2.all.min.js"></script>
    <!-- AdminLTE App -->
    <script src="<?php echo site_url() ?>assets/vendor/adminLTE/js/adminlte.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="<?php echo site_url() ?>assets/vendor/adminLTE/js/demo.js"></script>
    <!-- Page specific script -->
    <script src="<?php echo base_url()?>assets/js/spark-md5.min.js"></script>
    <script src="<?php echo base_url()?>assets/js/jquery.toast.js"></script>
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <!-- <li class="nav-item d-none d-sm-inline-block">
        <a href="../../index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li> -->
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <!-- <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div> -->
    </form>

    <!-- Right navbar links -->
    <div class="ml-auto mr-3"><a href="<?php echo site_url() ?>auth/logout">Logout</a></div>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link">
      <img src="<?php echo site_url() ?>assets/vendor/adminLTE/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">EMS Project</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <!-- <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="<?php echo site_url() ?>assets/vendor/adminLTE/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div> -->

      <!-- SidebarSearch Form -->
      <!-- <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div> -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          
          <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Manage
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="<?php echo site_url()?>admin/manage/invoice" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Invoice</p>
                </a>
              </li>
            </ul>
          </li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  <script>
      $(function(){
          $('a[href="'+ window.location.href +'"]').addClass('active');
      })
  </script>