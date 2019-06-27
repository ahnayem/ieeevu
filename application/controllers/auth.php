<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	// public function __construct()
	// {
	// 	parent::__construct();
	// 	$this->load->database();
	// }


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
			redirect('admin','refresh');

		} else {

			$data['error']='Invalid Email or Eassword!';
			$this->session->set_userdata($data);
			redirect('page/signin');
		}
		
	}
}
