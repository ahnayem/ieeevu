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

	public function events()
	{
		$this->load->view('admin/events');
	}

	public function create_event()
	{
		$this->load->view('admin/create_event');
	}

	public function images()
	{
		$this->load->view('admin/images');
	}

	public function upload_image()
	{
		$this->load->view('admin/upload_image');
	}

	public function members()
	{
		$this->load->view('admin/members');
	}

	public function registration()
	{
		$this->load->view('admin/registration');
	}

	public function message()
	{
		$this->load->view('admin/message');
	}
}