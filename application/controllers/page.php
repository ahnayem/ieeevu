<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page extends CI_Controller {


	public function index(){ $this->load->view('index'); }

	public function about(){ $this->load->view('about'); }

	public function recent(){ $this->load->view('recent'); }


	public function upcoming(){ 

		$this->load->model('model');
		$data['result'] = $this->model->upcoming_events_list();

		$this->load->view('upcoming',$data);
	}


	public function detail($id){

		$this->load->model('model');
		$data['row'] = $this->model->event_detail($id);

		$this->load->view('detail',$data);
	}

	public function publication(){ $this->load->view('publication'); }

	public function membership(){ $this->load->view('membership'); }

	public function team(){ $this->load->view('team'); }

	public function gallery(){ $this->load->view('gallery'); }

	public function contact(){ $this->load->view('contact'); }

	public function signin(){ $this->load->view('signin'); }
}

