<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		if($this->session->userdata('id')){
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

			$data['id']=$result->id;
			$data['name']=$result->name;
			$data['email']=$result->email;

			$this->session->set_userdata($data);
			redirect('dashboard/index');

		} else {

			$data['message']='Invalid Email or Eassword!';
			$this->session->set_userdata($data);
			redirect('page/signin');
		}
		
	}

}
