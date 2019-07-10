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
    <link href="<?php echo base_url()?>resources/assets1/css/style.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <script src="<?php echo base_url()?>resources/assets1/js/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <style type="text/css">
        th{
            text-align: center;
        }

        thead{
            background-color: #333;
            color: #fff;
        }
    </style>
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
                        <li class="nav-item d-none d-md-block"><a class="nav-link waves-effect waves-light" href="<?php echo base_url()?>" target="_blank"><span style="color: #ffb848; font-weight: bold">Main Site &nbsp<i class="mdi mdi-home"></span></i></a></li>
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
                                <img src="<?php echo base_url()?>resources/assets1/img/users/<?php echo $this->session->userdata('user_image') ?>" alt="user" class="rounded-circle" width="31"></a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated">
                                <a class="dropdown-item" href="<?php echo base_url()?>dashboard/profile"><i class="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="<?php echo base_url()?>dashboard/profile_setting"><i class="ti-settings m-r-5 m-l-5"></i> Profile Setting</a>
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
                                    <li class="breadcrumb-item active" aria-current="page">All Event</li>
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
                                <div class="row" style="padding-bottom: 20px">
                                    <div class="col-md-4 d-md-flex align-items-center">
                                        <div>
                                            <h4 class="card-title">All Event</h4>
                                            <h5 class="card-subtitle">Overview from the beginning</h5>
                                        </div>
                                    </div>
                                    <div class="col-md-4">

                                        <?php

                                        if ($this->session->userdata('message')) {
                                            $message=$this->session->userdata('message');

                                            echo '<div class="alert alert-success"  align="center">
                                                    Event update successfully!
                                            </div>';
                                            $this->session->unset_userdata('message');

                                            
                                        } if($this->session->userdata('error')) {
                                            echo '<div class="alert alert-warning center"  align="center">
                                                    Update failed
                                            </div>';
                                            $this->session->unset_userdata('error');
                                        } ?>
                                    </div>
                                    <div class="col-md-4"></div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="table-responsive">
                                            <table class="table table-bordered" id="event-table" width="100%" cellspacing="0">
                                                <thead>
                                                  <tr>
                                                    <th>SL</th>
                                                    <th>Title</th>
                                                    <th>Detail</th>
                                                    <th>Post By</th>
                                                    <th>Tag</th>
                                                    <th>Type</th>
                                                    <th>Date</th>
                                                    <th>Image</th>
                                                    <th>Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <?php $i=1; foreach ($result as $row): ?>
                                                  <tr>
                                                    <td><?php echo $i++ ?></td>
                                                    <td><?php echo substr($row->title,0,20).'...' ?></td>
                                                    <td><?php echo substr($row->detail,0,20).'...' ?></td>
                                                    <td><?php echo $row->post_by ?></td>
                                                    <td><?php echo $row->tag ?></td>
                                                    <td><?php echo $row->type ?></td>
                                                    <td><?php echo $row->date ?></td>
                                                    <td><a href="<?php echo base_url()?>resources/assets1/img/events_photo/<?php echo $row->image?>" target="_blank">click to view</a></td>

                                                    <td><center>

                                                    <a href="<?php echo base_url()?>dashboard/edit_event/<?php echo $row->id?>" class="btn btn-info"><i class="fa fa-edit"></i></a>



                                                    <a onclick="return ConfirmDelete();" href="<?php echo base_url()?>dashboard/delete_event/<?php echo $row->id?>" class="btn btn-warning"><i class="fa fa-trash-alt"></i></a></center></td>
                                                </tr>
                                                  <?php endforeach; ?>
                                                </tbody>            
                                            </table>
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
    
    <!-- Bootstrap tether Core JavaScript -->
    <script src="<?php echo base_url()?>resources/assets1/js/popper.min.js"></script>
    <script src="<?php echo base_url()?>resources/assets1/js/bootstrap.min.js"></script>
    <script src="<?php echo base_url()?>resources/assets1/js/perfect-scrollbar.jquery.min.js"></script>
    <script src="<?php echo base_url()?>resources/assets1/js/sparkline.js"></script>
    <!--Wave Effects -->
    <script src="<?php echo base_url()?>resources/assets1/js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="<?php echo base_url()?>resources/assets1/js/sidebarmenu.js"></script>
    <!--Custom JavaScript -->
    <script src="<?php echo base_url()?>resources/assets1/js/custom.min.js"></script>
    <!--This page JavaScript -->

    <!-- Bootstrap JS CDN -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    
    <!-- datatable -->
    <script type="text/javascript">
    $(document).ready(function() {
        $('#event-table').DataTable();
    });
    </script>

    <script type="text/javascript">
        function ConfirmDelete()
        {
          var x = confirm("Are you sure you want to delete?");
          if (x)
              return true;
          else
            return false;
        }
    </script>
    
</body>

</html>
