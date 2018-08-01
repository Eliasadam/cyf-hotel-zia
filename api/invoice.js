
const express = require("express");
const router = express.Router();
const invoices = require("../public/data/invoices.json");

router.get("/", (req, res) => {
 res.json(invoice);
 
  
});

router.get("/:id?", (req, res) => {
  
  // TODO read req.query.reservationId and req.body.invoice and insert into DB
  if (req.params.id) {
    const filter = invoices.filter(
      invoice=> invoice.id === parseInt(req.params.id)
    );
    res.status(200).json({
      invoices: filter
    });
  } else {  
    res.status(200).json({
      
      invoices:invoices
    });
  }

  //
  // res.status(200).json({
  //   reservationId: req.query.reservationId,
  //   invoice: req.body.invoice
  // });
});

router.post("/", (req, res) => {
  // TODO read req.body.invoice
  res.status(200).json(req.body.invoices);
});

router.put("/", (req, res) => {
  // TODO update per req.body.invoice
  res.status(200).json(req.body.invoice);
});

router.delete("/", (req, res) => {
  // TODO delete req.body.invoice
  res.status(200).json(req.body.invoice);
});

router.put("/invoice", (req, res) => {
  // TODO read req.query.reservationId and req.body.invoice and insert into DB
  res.status(200).json({
    // reservationId: req.query.reservationId,
    invoice: req.body.invoice
  });
});

module.exports = router;
