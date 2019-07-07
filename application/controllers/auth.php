<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		if($this->session->userdata('user_id')){
			redirect('dashboard/index');
		}
	}


	public function login()
	{
		$email=$this->input->post('email',true);
		$pass=$this->input->post('pass',true);

		$this->load->model('model');
		$result=$this->model->login($email,$pass);
		$data=array();


		if ($result) {

			$data['user_id']=$result->id;
			$data['user_name']=$result->name;
			$data['user_email']=$result->email;

			$this->session->set_userdata($data);
			redirect('dashboard/index');

		} else {

			$data['message']='Invalid Email or Eassword!';
			$this->session->set_userdata($data);
			redirect('page/signin');
		}
		
	}

}
