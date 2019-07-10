<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model extends CI_Model {

	public function login($email,$pass)
	{
		$this->db->select('*');
		$this->db->from('tbl_admin');
		$this->db->where('email',$email);
		$this->db->where('pass',md5($pass));

		$query=$this->db->get();
		$result=$query->row();

		return $result;
		
	}

	
	public function create_event_upload_data($data)
	{
		$ins['post_by']=$this->session->userdata('user_name');
		$ins['title']=$data['title'];
		$ins['detail']=$data['detail'];
		$ins['tag']=$data['tag'];
		$ins['type']=$data['event_type'];
		$ins['date']=date('Y-m-d', strtotime($data['date']));
		$ins['image']=$data['image_name'];


		$query = $this->db->insert('tbl_event', $ins);

		if ($query) {
			$data['message'] = 'Image uploaded successfully!';
            $this->session->set_userdata($data);
           
		} else {
			$data['error'] = 'Insertion failed';
            $this->session->set_userdata($data);
		}	
	}

	public function events_list()
	{
		$this->db->order_by('id', 'desc');
		$query=$this->db->get('tbl_event');
		$result=$query->result();

		return $result;
	}

	public function recent_events_list()
	{
		$this->db->where('type', 'Recent');
		$this->db->order_by('date', 'desc');
		$query=$this->db->get('tbl_event');
		$result=$query->result();

		return $result;
	}

	public function upcoming_events_list()
	{
		
		$this->db->where('type', 'Upcoming');
		$this->db->order_by('date', 'desc');
		$query=$this->db->get('tbl_event');
		$result=$query->result();

		return $result;
	}

	public function event_detail($id)
	{
		
		$this->db->where('id', $id);
		$query=$this->db->get('tbl_event');
		$result=$query->row();

		return $result;
	}

	

	

	public function event_edit_show($id)
	{
		$this->db->select('*');
		$this->db->from('tbl_event');
		$this->db->where('id',$id);

		$query=$this->db->get();
		$result=$query->row();

		return $result;
		
	}

	public function update_event($data)
	{
		$up['post_by']=$this->session->userdata('user_name');
		$up['title']=$data['title'];
		$up['detail']=$data['detail'];
		$up['tag']=$data['tag'];
		$up['type']=$data['event_type'];
		$up['date']=date('Y-m-d', strtotime($data['date']));
		$up['image']=$data['image'];
		$id=$data['event_id'];



		$this->db->where('id',$id);

		if( $this->db->update('tbl_event',$up)) {

		    $data['message'] = 'Image uploaded successfully!';
            $this->session->set_userdata($data);

		} else {

		    $data['error'] = 'Insertion failed';
            $this->session->set_userdata($data);
            
		}
	}

	public function event_delete($id)
	{
		$this->db->where('id', $id);
		$result =  $this->db->delete('tbl_event');

		return $result;
	}


	public function upload_image($data){

		$ins['title']=$data['title'];
		$ins['date']=date('Y-m-d', strtotime($data['date']));
		$ins['image']=$data['image_name'];


		$query = $this->db->insert('tbl_image', $ins);

		if ($query) {
			$data['message'] = 'Image uploaded successfully!';
            $this->session->set_userdata($data);
           
		} else {
			$data['error'] = 'Insertion failed';
            $this->session->set_userdata($data);
		}	
	}

	public function all_image()
	{
		
		$this->db->order_by('id', 'desc');
		$query=$this->db->get('tbl_image');
		$result=$query->result();

		return $result;
	}

	public function galery_image()
	{
		$this->db->order_by('date', 'desc');
		$query=$this->db->get('tbl_image');
		$result=$query->result();


		return $result;
	}


	public function image_find($id)
	{
		$this->db->select('*');
		$this->db->from('tbl_image');
		$this->db->where('id',$id);

		$query=$this->db->get();
		$result=$query->row();

		return $result;
	}

	public function image_delete($id)
	{
		$this->db->where('id', $id);
		$result = $this->db->delete('tbl_image');

		return $result;
	}



	public function contact($data)
	{

		$ins['name']=$data['name'];
		$ins['email']=$data['email'];
		$ins['message']=$data['message'];


		$query = $this->db->insert('tbl_message', $ins);

		return $query;
	}

	public function all_message()
	{
		$this->db->order_by('id', 'desc');
		$query=$this->db->get('tbl_message');
		$result=$query->result();

		return $result;
	}


	public function message_delete($id)
	{
		$this->db->where('id', $id);
		$result = $this->db->delete('tbl_message');

		return $result;
	}

	public function update_profile_photo($data)
	{
		$up['image']=$data['image'];
		$id=$this->session->userdata('user_id');



		$this->db->where('id',$id);

		if( $this->db->update('tbl_admin',$up)) {

		    $data['message'] = 'Image updated successfully!';
            $this->session->set_userdata($data);

		} else {

		    $data['error'] = 'Updation failed';
            $this->session->set_userdata($data);
            
		}
	}

	public function profile_photo()
	{
		$id=$this->session->userdata('user_id');
		$this->db->where('id', $id);
		$query=$this->db->get('tbl_admin');
		$result=$query->row();

		return $result;
	}

	public function pass_check($pass)
	{
		$email=$this->session->userdata('user_email');
		$this->db->select('*');
		$this->db->from('tbl_admin');

		$this->db->where('email',$email);
		$this->db->where('pass',md5($pass));

		$query=$this->db->get();
		$result=$query->row();

		return $result;
		
	}

	public function update_pass($pass)
	{
		$up['pass']=md5($pass);
		$id=$this->session->userdata('user_id');

		$this->db->where('id',$id);
		 return $this->db->update('tbl_admin',$up);
	}

}