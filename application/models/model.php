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
}