<!DOCTYPE html>
<html>
<head>
    <title>VU IEEE :: Login</title>

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!------ Include the above in your HEAD tag ---------->

<style type="text/css">
    .login-container{
        padding: 8%;
    }
    .login-form{
        padding: 5%;
        background: #f05837;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
    }
    .login-form h3{
        text-align: center;
        margin-bottom:12%;
        color: #fff;
    }
    .btnSubmit{
        font-weight: 600;
        width: 50%;
        color: #282726;
        background-color: #fff;
        border: none;
        border-radius: 1.5rem;
        padding:2%;
    }

    .btnSubmit:hover{
        color: #000;
        background-color: #fbd8d0;
        border-color: #fff; 
    }

    .btnForgetPwd{
        color: #fff;
        font-weight: 600;
        text-decoration: none;
    }
    .btnForgetPwd:hover{
        text-decoration:none;
        color:#000;
    }
</style>
</head>
<body>
    <div class="container login-container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 login-form">
                <h3 style="margin-bottom: 10%!important"><b>LOGIN HERE</b></h3>
                
                <?php $error=$this->session->userdata('error');

                if(isset($error)){
                ?>
                <div class="row">
                    <div class="col-md-12" style="margin-top: 15px;">
                        <div class='alert alert-danger text-center' role='alert'>
                            <strong><?php
                                    echo $error;
                                    $this->session->unset_userdata('error');
                                
                                ?>
                            </strong>
                        </div>
                    </div>
                </div>
            <?php } ?>

                <form action="<?php echo base_url();?>login" method="post">
                    <div class="form-group">
                        <input type="text" name="email" class="form-control" placeholder="Your Email *" required="" />
                    </div>
                    <div class="form-group">
                        <input type="password" name="pass" class="form-control" placeholder="Your Password *" required="" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Login" />
                    </div>
                    <div class="form-group">
                        <a href="#" class="btnForgetPwd" value="Login">Forget Password?</a>
                        <a href="<?php echo base_url();?>" style="float: right;" class="btnForgetPwd" value="Login"><i class="fas fa-arrow-circle-left"></i> Back To Home</a>
                    </div>
                      
                                            
                </form>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</body>
</html>