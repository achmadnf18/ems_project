<?php defined('BASEPATH') OR exit('No direct script access allowed');

class M_Invoices extends CI_Model
{
    private $_table = "invoices";
    private $_tableDetail = "detail_invoices";

    public function __construct()
    {
        parent::__construct();

        $this->load->helper('string');
    }

    public function rules()
    {
        return [

            ['field' => 'invoice_date',
            'label' => 'invoice_date',
            'rules' => 'required'],

            ['field' => 'item_name',
            'label' => 'item_name',
            'rules' => 'required'],

            ['field' => 'price',
            'label' => 'price',
            'rules' => 'required'],

            ['field' => 'qty',
            'label' => 'qty',
            'rules' => 'required'],
        ];
    }

    public function rulesDetailInvoice()
    {
        return [

            ['field' => 'invoice_id',
            'label' => 'invoice_id',
            'rules' => 'required'],

            ['field' => 'item_name',
            'label' => 'item_name',
            'rules' => 'required'],

            ['field' => 'price',
            'label' => 'price',
            'rules' => 'required'],

            ['field' => 'qty',
            'label' => 'qty',
            'rules' => 'required'],
        ];
    }

    public function getAll()
    {
        return $this->db->query("
            SELECT x1.id
                , x1.invoice_no 
                , x1.invoice_date
                , x2.name vendor_name
                , x1.total
                , x1.is_approve
            FROM `invoices` AS x1
                LEFT JOIN `vendors` AS x2
                    ON x2.`id` = x1.`vendor_id`
            WHERE x1.`row_status` = '0' AND x1.`is_approve` = true"
        )->result();
    }

    public function getAllByVendor()
    {
        $vendorID = $this->session->userdata('id');
        return $this->db->query("
            SELECT x1.id
                , x1.invoice_no 
                , x1.invoice_date
                , x2.name vendor_name
                , x1.total
                , x1.is_approve
            FROM `invoices` AS x1
                LEFT JOIN `vendors` AS x2
                    ON x2.`id` = x1.`vendor_id`
            WHERE x1.`row_status` = '0'
                AND x1.`vendor_id` = '$vendorID'
            ORDER BY x1.invoice_date DESC"
        )->result();
    }
    
    public function getById($id)
    {
        return $this->db->query("
            SELECT x1.id
                , x1.invoice_no 
                , x2.name vendor_name
                , x1.total
            FROM `invoices` AS x1
                LEFT JOIN `vendors` AS x2
                    ON x2.`id` = x1.`id`
            WHERE x1.`id`= '$id'
                AND x1.`row_status` = '0'"
        )->row();
    }

    public function getListDetailInvoice($id) {
        return $this->db->query("
            SELECT x1.id
                , x1.invoice_id
                , x2.invoice_no
                , x2.invoice_date
                , x1.item_name
                , x1.price
                , x1.qty
                , x1.total
                , x3.name vendor_name
                , x2.is_approve
            FROM `detail_invoices` AS x1
                LEFT JOIN `invoices` AS x2
                    ON x2.`id` = x1.`invoice_id`
                LEFT JOIN `vendors` AS x3
                    ON x3.`id` = x2.`vendor_id`
            WHERE x1.`invoice_id`= '$id'
                AND x1.`row_status` = '0'"
        )->result();
    }

    public function save()
    {
        $this->db->trans_start();

        $post = $this->input->post();
        
        $price = $post["price"];
        $qty = $post["qty"];

        $this->invoice_date = $post["invoice_date"];
        $this->invoice_no = strtoupper("INV-".random_string('alnum', 6));
        $this->vendor_id = $this->session->userdata('id');
        $this->is_approve = false;
        $this->total = $qty * $price;
        $this->db->insert($this->_table, $this);

        $invoiceID = $this->db->insert_id();
        
        $data = array(
            "invoice_id" => $invoiceID,
            "item_name" => $post["item_name"],
            "price" => $price,
            "qty" => $qty,
            "total" => $this->total
        );
        $this->db->insert($this->_tableDetail, $data);

        return $this->db->trans_complete();
    }

    public function update($id)
    {
        $post = $this->input->post();
        $this->email = $post["email"];
        $this->username = $post["username"];
        if(isset($post['password'])) $this->password = password_hash($post["password"], PASSWORD_DEFAULT);
        
        return $this->db->update($this->_table, $this, array('id' => $id));
    }

    public function delete($id)
    {
        $post = $this->input->post();
        $this->row_status = "-1";
        return $this->db->update($this->_table, $this, array('id' => $post['id']));
    }

    public function saveDetailInvoice()
    {
        $this->db->trans_start();

        $post = $this->input->post();
        $this->invoice_id = $post["invoice_id"];
        $this->item_name = $post["item_name"];
        $this->price = $post["price"];
        $this->qty = $post["qty"];
        $this->total = $this->price * $this->qty;
        $this->db->insert($this->_tableDetail, $this);

        $this->doUpdateTotalInvoice($this->invoice_id);

        return $this->db->trans_complete();
    }

    public function updateDetailInvoice($id)
    {
        $this->db->trans_start();

        $post = $this->input->post();
        $this->invoice_id = $post["invoice_id"];
        $this->item_name = $post["item_name"];
        $this->price = $post["price"];
        $this->qty = $post["qty"];
        $this->total = $this->price * $this->qty;
        $this->db->update($this->_tableDetail, $this, array('id' => $id));

        $this->doUpdateTotalInvoice($this->invoice_id);

        return $this->db->trans_complete();
    }

    public function doUpdateTotalInvoice($invoice_id) {
        $this->db->select_sum('total');
        $this->db->from('detail_invoices');
        $this->db->where('invoice_id = '.$invoice_id.' AND row_status = "0" ');
        $dataInvoice = array(
            "total" => $this->db->get()->row()->total
        );

        return $this->db->update($this->_table, $dataInvoice, array('id' => $invoice_id));
    }

    public function deleteDetailInvoice($id)
    {
        $this->db->trans_start();

        $this->row_status = "-1";
        $this->db->update($this->_tableDetail, $this, array('id' => $id));
        
        $this->invoice_id = $this->db->get_where($this->_tableDetail, ["id" => $id])->row()->invoice_id;
        $this->doUpdateTotalInvoice($this->invoice_id);

        return $this->db->trans_complete();
    }

    public function deleteInvoice($id)
    {
        $this->db->trans_start();

        $this->row_status = "-1";
        $this->db->update($this->_table, $this, array('id' => $id));
        $this->db->update($this->_tableDetail, $this, array('invoice_id' => $id));

        return $this->db->trans_complete();
    }

    public function confirmInvoice($id)
    {
        $this->db->trans_start();

        $this->is_approve = true;
        $this->db->update($this->_table, $this, array('id' => $id, 'vendor_id' => $this->session->userdata('id')));

        return $this->db->trans_complete();
    }
}