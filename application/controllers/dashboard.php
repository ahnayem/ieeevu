<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	function __construct(){
		parent::__construct();
		if(!$this->session->userdata('id')){
			redirect('page/signin','refresh');
		}
	}


	public function index()
	{
		$this->load->view('admin/index');
	}

	public function logout()
	{
		$this->session->set_userdata('id');
		$data['message']='Successfully Logout';
		$this->session->set_userdata($data);
		redirect(base_url('page/signin'),'refresh');
	}
}