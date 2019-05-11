# IBM Watson Chat POC

Este repositório consiste em apenas uma POC (proof of concept), usado para ajudar um amigo em um trabalho de faculdade.
Basicamente é um servidor em nodejs (pasta /watson-chat-back) que faz a intermediação entre o front (pasta /watson-chat-front) e a API do assistente watson.

## Backend

Para configurar o backend é necessário abrir ou criar o arquivo /watson-chat-back/.env e alterar as variáveis de ambiente:

```
ASSISTANT_API_VERSION=
ASSISTANT_IAM_KEY=
ASSISTANT_URL=
WORKSPACE_ID=
```

Acesse o dashboard do [cloud ibm](https://cloud.ibm.com/), acesse Watson no menu lateral, depois vá em Serviços do Watson > Serviços Existentes e acesse seu Assistente Watson, e pegue suas credenciais:

![Getting credentials](https://imgur.com/Pq2V6wxl.png)

E para a url do seu workspace, clique em Launch Tool > Skills > Clique no menu de três pontinhos > View API Details, e pegue o seu Workspace ID.

### Frontend

Para iniciar o frontend, basta abrir ou criar o arquivo /watson-chat-front/.env e preencher com o endereço do servidor backend criado logo acima.
