<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Vendor extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

        $sess = $this->session->userdata('role_id');
        if(empty($sess)) redirect('account/login'); 
        if($sess != 2) redirect('/');

        $this->load->library('form_validation');
    }

    public function manageInvoice()
	{
		$data['main'] = 'admin/manageInvoices';
		$this->load->view('layouts/vendorTemplate', $data);
    }
}
