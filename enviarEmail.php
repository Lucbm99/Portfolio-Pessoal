<?php	
 $captcha = $_POST['g-recaptcha-response'];
 if($captcha != ''){
    $secreto = '6LdggDobAAAAAFajzDxvxSwuA-EHemVM-XS0hp8o';
    $ip      = $_SERVER['REMOTE_ADDR'];
    $var     = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secreto&response=$captcha&remoteip=$ip");
    $resposta = json_decode($var, true);
    if($resposta['success']){
   
        if(isset($_POST['nome']) && !empty($_POST['nome'])){
		$nome=addslashes($_POST['nome']);
		$email=addslashes($_POST['email']);
		$fone=addslashes($_POST['fone']);
		$mensagem=addslashes($_POST['mensagem']);


		$para="contato@lucasbmarchiori.com.br";
		$assunto="Contato - Site Portfolio";
		$corpo = "Nome = $nome \n"; 
		$corpo .= "Email = $email \n";
		$corpo .= "Telefone = $fone \n"; 
		$corpo .= "Mensagem = $mensagem \n";

					"X-Mailer: PHP/".phpversion();
		mail($para, $assunto, $corpo);
		echo 
		"<script>
		alert('E-mail enviado com sucesso! Em breve, entrarei em contato.');
		window.location.href='index.html';
		</script>";

    }else{
        echo 'A verificação não foi autenticada, gentileza tentar novamente';
    }
 }else{
    echo 'Você não selecionou o recaptcha';
 }
 ?>
 
