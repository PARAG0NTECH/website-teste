const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

var counterReboot = 0;
var instance = "";

const app = express();
app.use(bodyParser.json());

// Configure o SDK da AWS com suas credenciais
AWS.config.update({
  accessKeyId: 'ACCESS_KEY',
  secretAccessKey: 'ACCESS_SECRET',
  region: 'us-east-1' // Substitua pela região desejada
});

const ec2 = new AWS.EC2();


// Endpoint para reiniciar uma instância
app.post('/restart-instance', (req, res) => {
  console.log("Entrei na restart-instance");
  const instanceId = req.body.instanceId;

  const params = {
    InstanceIds: [instanceId]
  };

  ec2.rebootInstances(params, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao reiniciar a instância' });
    }
    res.json({ message: 'Instância reiniciada com sucesso' });
    instance = instanceId;
    counterReboot++;
  });
});


// Counter reboot
app.get('/counter-reboot', (req, res) => {
  res.json({ counter_reboot: counterReboot, lastInstanceId: instance})
})

// Inicie o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});
