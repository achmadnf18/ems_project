<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$data['main'] = 'users/login';
		$this->load->view('layouts/template', $data);
	}
}
