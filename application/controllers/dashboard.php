<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->helper('form');
		$this->load->helper('url');
		$this->load->library('form_validation');
		$this->load->library('upload');

		if(!$this->session->userdata('user_id')){
			redirect('page/signin','refresh');
		}
	}


	public function index()
	{
		$this->load->view('admin/index');
	}


	public function logout()
	{
		$this->session->unset_userdata('user_id');
		$data['message']='Successfully Logout';
		$this->session->set_userdata($data);
		redirect(base_url('page/signin'),'refresh');
	}

	public function events()
	{
		$this->load->model('model');
		$data['result'] = $this->model->events_list();

		$this->load->view('admin/events',$data);
	}

	public function create_event()
	{
		$this->load->view('admin/create_event');
	}


	public function images()
	{
		$this->load->model('model');
		$data['result'] = $this->model->all_image();

		$this->load->view('admin/images',$data);
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
		$this->load->model('model');
		$data['result'] = $this->model->all_message();

		$this->load->view('admin/message',$data);
	}

	public function create_event_upload_data()
	{
		$data['title']=$this->input->post('title',true);
		$data['detail']=$this->input->post('detail',true);
		$data['tag']=$this->input->post('tag',true);
		$data['date']=$this->input->post('date',true);
		$data['event_type']=$this->input->post('event_type',true);

		$image_name=basename($_FILES['image']['name']);
		$type=explode('.',$image_name);
		$type=strtolower($type[count($type)-1]);
		$image_name=md5(uniqid(rand()).time()).".".$type;
		$data['image_name'] = $image_name;

		

		$config['upload_path'] = './resources/assets1/img/events_photo/'; 
        $config['allowed_types'] = 'gif|jpg|jpeg|png';
        $config['file_name'] = $image_name;



        
        $this->load->library('upload',$config);
        $this->upload->initialize($config);

        

        if ($this->upload->do_upload('image')) {
            $data['file_data'] = $this->upload->data();
            $this->load->model('model');
        	$this->model->create_event_upload_data($data); 
        	$data['message'] = 'Event Upload Successfully!';
        	$this->session->set_userdata($data);
        	redirect('dashboard/create_event');
           
         }
         else { 
         	$data['error'] = 'Event Upload failed';
			$this->session->set_userdata($data);
			redirect('dashboard/create_event');
          
         } 
	}

	public function edit_event($id)
	{
		$this->load->model('model');
		$data['row'] = $this->model->event_edit_show($id);

		$this->load->view('admin/edit_event',$data);
		
	}

	public function update_event($id)
	{

		$data['event_id'] = $id;
		$data['title']=$this->input->post('title',true);
		$data['detail']=$this->input->post('detail',true);
		$data['tag']=$this->input->post('tag',true);
		$data['date']=$this->input->post('date',true);
		$data['event_type']=$this->input->post('event_type',true);


		$this->load->model('model');
		$result = $this->model->event_edit_show($id);
		$image_name=$result->image;

		$data['image']=$image_name;
		

		$config['upload_path'] = './resources/assets1/img/events_photo/';  
        $config['allowed_types'] = 'gif|jpg|jpeg|png';
        $config['file_name'] = $image_name;
        $config['overwrite'] = TRUE;

        
        $this->load->library('upload',$config);
        $this->upload->initialize($config);
       

        if ($this->upload->do_upload('image')) {
            $data['file_data'] = $this->upload->data();
            $this->load->model('model');
        	$this->model->update_event($data); 
        	redirect('dashboard/events');
           
         }
         else { 
			redirect('dashboard/events');
          
         }
	}

	public function delete_event($id)
	{
		$this->load->model('model');
		$result = $this->model->event_edit_show($id);
		$image_name=$result->image;

		$this->load->model('model');
		$result = $this->model->event_delete($id);

		if ($result) {
			unlink('./resources/assets1/img/events_photo/'.$image_name);
			redirect('dashboard/events');
		} else {
			redirect('dashboard/events');
		}

	}

	public function upload_image_file()
	{

		$data['title']=$this->input->post('title',true);
		$data['date']=$this->input->post('date',true);
		

		$image_name=basename($_FILES['image']['name']);
		$type=explode('.',$image_name);
		$type=strtolower($type[count($type)-1]);
		$image_name=md5(uniqid(rand()).time()).".".$type;
		$data['image_name'] = $image_name;

		
		$config['upload_path'] = './resources/assets1/img/image/';  
        $config['allowed_types'] = 'gif|jpg|jpeg|png';
        $config['file_name'] = $image_name;

        
        $this->load->library('upload',$config);
        $this->upload->initialize($config);
       

        if ($this->upload->do_upload('image')) {
            $data['file_data'] = $this->upload->data();
            $this->load->model('model');
        	$this->model->upload_image($data); 
        	$data['message'] = 'Image Uploaded Successfully!';
			$this->session->set_userdata($data);
        	redirect('dashboard/upload_image');
           
         }
         else { 
         	$data['error'] = 'Upload failed';
			$this->session->set_userdata($data);
			redirect('dashboard/upload_image');
          
         }
	}

	public function image_delete($id)
	{
		$this->load->model('model');
		$result = $this->model->image_find($id);
		$image_name=$result->image;

		$this->load->model('model');
		$result = $this->model->image_delete($id);

		if ($result) {
			unlink('./resources/assets1/img/image/'.$image_name);
			redirect('dashboard/images');
		} else {
			redirect('dashboard/images');
		}
	}

	public function contact()
	{
		$data['name']=$this->input->post('name',true);
		$data['email']=$this->input->post('email',true);
		$data['message']=$this->input->post('message',true);


		$this->load->model('model');
		$result = $this->model->contact($data);

		if ($result) {
			$data['message'] = 'Message sent!';
			$this->session->set_userdata($data);
        	redirect('page/contact');
		} else {
			$data['message'] = 'Send failed!';
			$this->session->set_userdata($data);
        	redirect('page/contact');
        	
		}
	}

	public function message_delete($id)
	{
		$this->load->model('model');
		$result = $this->model->message_delete($id);

		if ($result) {
			$data['message'] = 'Message deleted!';
			$this->session->set_userdata($data);
        	redirect('dashboard/message');
		} else {
			$data['message'] = 'Deletion failed!';
			$this->session->set_userdata($data);
        	redirect('dashboard/message');
		}
	}

	public function profile()
	{
		$this->load->view('admin/profile');
	}

	public function profile_setting()
	{
		$this->load->view('admin/profile_setting');
	}

	public function update_profile_photo()
	{

		$this->load->model('model');
		$result = $this->model->profile_photo();
		$image_name=$result->image;

		$data['image']=$image_name;

		$config['upload_path'] = './resources/assets1/img/users/';  
        $config['allowed_types'] = 'gif|jpg|jpeg|png';
        $config['file_name'] = $image_name;
        $config['overwrite'] = TRUE;

        
        $this->load->library('upload',$config);
        $this->upload->initialize($config);
       

        if ($this->upload->do_upload('image')) {
            $data['file_data'] = $this->upload->data();
            $this->load->model('model');
        	$this->model->update_profile_photo($data); 
        	redirect('dashboard/profile_setting','refresh');
           
         }
         else { 
			redirect('dashboard/profile_setting','refresh');
          
         }
	}

	public function password_update()
	{
		$old_pass=$this->input->post('old_pass',true);
		$new_pass=$this->input->post('new_pass',true);
		$confirm_pass=$this->input->post('confirm_pass',true);



		if ($confirm_pass == $new_pass) {
			$this->load->model('model');
        	$result = $this->model->pass_check($old_pass);


        	if ($result) {
        		$this->load->model('model');
        		$result = $this->model->update_pass($new_pass);

        		$data['message'] = 'Password Updated!';
				$this->session->set_userdata($data);
				redirect('dashboard/profile_setting');

        	} else {
        		$data['error'] = 'Updation failed';
				$this->session->set_userdata($data);
				redirect('dashboard/profile_setting');
        	}
			
		} else{
			$data['error'] = 'Updation failed';
			$this->session->set_userdata($data);
			redirect('dashboard/profile_setting');
		}
	}

}