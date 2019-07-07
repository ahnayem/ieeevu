<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_url()?>resources/assets1/img/icon.ico">
    <title>Admin Dashboard</title>

    <link href="<?php echo base_url()?>resources/assets1/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
    <link href="<?php echo base_url()?>resources/assets1/css/select2.min.css" rel="stylesheet" type="text/css">
    

    <link rel="stylesheet" type="<?php echo base_url()?>resources/assets1/css/quill.snow.css">
    <link href="<?php echo base_url()?>resources/assets1/css/style.min.css" rel="stylesheet" type="text/css">

    

</head>

<body>
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar" data-navbarbg="skin5">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header" data-logobg="skin5">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
                    <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== -->
                    <a class="navbar-brand" href="<?php echo base_url()?>dashboard/index">
                        <!-- Logo icon -->
                        <b class="logo-icon p-l-10">
                            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                            <!-- Dark Logo icon -->
                            <img src="<?php echo base_url()?>resources/assets1/img/logo-text.png" alt="" width="150px" height="40px" />
                           
                        </b>
                        
                        <!--End Logo icon -->
                    </a>
                    <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Toggle which is visible on mobile only -->
                    <!-- ============================================================== -->
                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav float-left mr-auto">
                        <li class="nav-item d-none d-md-block"><a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i class="mdi mdi-menu font-24"></i></a></li>
                    </ul>
                    <!-- ============================================================== -->
                    <!-- Right side toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav float-right">
                        
                        <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style="color: #ffb848; font-weight: bold">Hello, <?php echo $this->session->userdata('user_name') ?>&nbsp</span>
                                <img src="<?php echo base_url()?>resources/assets1/img/users/1.jpg" alt="user" class="rounded-circle" width="31"></a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated">
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-settings m-r-5 m-l-5"></i> Profile Setting</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="<?php echo base_url()?>dashboard/logout"><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== -->
                    </ul>
                </div>
            </nav>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar" data-sidebarbg="skin5">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav" class="p-t-30">
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="<?php echo base_url()?>dashboard/index" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Dashboard</span></a></li>
                        
                        
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-file"></i><span class="hide-menu">Event </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="<?php echo base_url()?>dashboard/events" class="sidebar-link"><i class="mdi mdi-note-outline"></i><span class="hide-menu"> All Event </span></a></li>
                                <li class="sidebar-item"><a href="<?php echo base_url()?>dashboard/create_event" class="sidebar-link"><i class="mdi mdi-note-plus"></i><span class="hide-menu"> Create New </span></a></li>
                            </ul>
                        </li>

                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Gallery </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="<?php echo base_url()?>dashboard/images" class="sidebar-link"><i class="mdi mdi-google-photos"></i><span class="hide-menu"> All Image </span></a></li>
                                <li class="sidebar-item"><a href="<?php echo base_url()?>dashboard/upload_image" class="sidebar-link"><i class="mdi mdi-file-image"></i><span class="hide-menu"> Upload New </span></a></li>
                            </ul>
                        </li>
                        
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Membership </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="<?php echo base_url()?>dashboard/members" class="sidebar-link"><i class="mdi mdi-account"></i><span class="hide-menu"> All Members </span></a></li>
                                <li class="sidebar-item"><a href="<?php echo base_url()?>dashboard/registration" class="sidebar-link"><i class="mdi mdi-account-plus"></i><span class="hide-menu"> Registration </span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="<?php echo base_url()?>dashboard/message" aria-expanded="false"><i class="mdi mdi-message-processing"></i><span class="hide-menu">Messages</span></a></li>
                        
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper"  style="padding-bottom: 70px;">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
             <div class="page-breadcrumb">
                <div class="row">
                    <div class="col-12 d-flex no-block align-items-center">
                        <h4 class="page-title">Dashboard</h4>
                        <div class="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="<?php echo base_url()?>dashboard/index">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Create Event</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-md-flex align-items-center">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h4 class="card-title">Create Event</h4>
                                                <h5 class="card-subtitle">Please fill the all fields*</h5>
                                            </div>
                                            <div class="col-md-6">

                                                <?php

                                                if ($this->session->userdata('message')) {

                                                    echo '<div class="alert alert-success"  align="center">
                                                            Event uploaded successfully!
                                                    </div>';
                                                    $this->session->unset_userdata('message');

                                                    
                                                } if($this->session->userdata('error')) {
                                                    echo '<div class="alert alert-warning center"  align="center">
                                                            <p>Upload failed</p>
                                                    </div>';
                                                    $this->session->unset_userdata('error');
                                                } ?>
                                            </div>
                                            <div class="col-md-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <form class="form-horizontal" action="<?php echo base_url()?>dashboard/create_event_upload_data" method="post" enctype="multipart/form-data">
                                                <div class="card-body">
                                                    <div class="form-group row">
                                                        <label for="title" class="col-sm-2 text-right control-label col-form-label">Title</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" name="title" id="title" placeholder="" required>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="detail" class="col-sm-2 text-right control-label col-form-label">Detail</label>
                                                        <div class="col-sm-10">
                                                            <textarea class="form-control" id="detail" name="detail" rows="5" required></textarea>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="tag" class="col-md-2 text-right control-label col-form-label">Select Tag</label>
                                                        <div class="col-md-10">
                                                            <select id="tag" name="tag" class="select2 form-control custom-select" style="width: 100%; height:36px;" required>
                                                                <option>Select</option>
                                                                    <option value="Featured">Featured</option>
                                                                    <option value="Technical">Technical</option>
                                                                    <option value="Technical">Non-Technical</option>
                                                                    <option value="Seminar">Seminar</option>
                                                                    <option value="Other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div  class="form-group row">
                                                        <label for="event_type" class="col-md-2 text-right control-label col-form-label">Event Type</label>
                                                        <div class="col-md-10">
                                                            <select id="event_type" name="event_type" class="select2 form-control custom-select" style="width: 100%; height:36px;" required>
                                                                    <option>Select</option>
                                                                    <option value="Recent">Recent</option>
                                                                    <option value="Upcoming">Upcoming</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-sm-2 text-right control-label col-form-label">Date</label>
                                                        <div class="col-sm-10 input-group">
                                                            <input type="text" name="date" class="form-control" id="datepicker-autoclose" placeholder="mm/dd/yyyy" required>
                                                            <div class="input-group-append">
                                                                <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="image" class="col-md-2 text-right control-label"></label>
                                                        <div class="col-md-10">
                                                            <input type="file" id="image" name="image" class="form-control" id="" required>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="border-top">
                                                    <div class="card-body">
                                                        <input type="submit" name="submit" class="btn btn-primary" value="Submit">
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <!-- column -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- Sales chart -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Recent comment and chats -->
                <!-- ============================================================== -->
                
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script src="<?php echo base_url()?>resources/assets1/js/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="<?php echo base_url()?>resources/assets1/js/popper.min.js"></script>
    <script src="<?php echo base_url()?>resources/assets1/js/bootstrap.min.js"></script>
    <script src="<?php echo base_url()?>resources/assets1/js/perfect-scrollbar.jquery.min.js"></script>
    <script src="<?php echo base_url()?>resources/assets1/js/sparkline.js"></script>
    <!--Wave Effects -->
    <script src="<?php echo base_url()?>resources/assets1/js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="<?php echo base_url()?>resources/assets1/js/sidebarmenu.js"></script>

    <script src="<?php echo base_url()?>resources/assets1/js/select2.min.js"></script>
    <script src="<?php echo base_url()?>resources/assets1/js/select2.full.min.js"></script>
    <!--Custom JavaScript -->
    <script src="<?php echo base_url()?>resources/assets1/js/custom.min.js"></script>
    <!--This page JavaScript -->
    <script src="<?php echo base_url()?>resources/assets1/js/bootstrap-datepicker.min.js"></script>
    <script>
    
        /*datwpicker*/
        jQuery('.mydatepicker').datepicker();
        jQuery('#datepicker-autoclose').datepicker({
            autoclose: true,
            todayHighlight: true
        });
        var quill = new Quill('#editor', {
            theme: 'snow'
        });

    </script>

</body>

</html>