DROP TABLE usuarios;
CREATE TABLE usuarios (
cd_usuario INTEGER(3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nm_usuario VARCHAR(30) NOT NULL,
nm_login VARCHAR(30) NOT NULL,
nm_senha VARCHAR(30) NOT NULL,
nm_privilegio VARCHAR(12) NOT NULL DEFAULT 'usuario',
im_usuario BLOB
);

DROP TABLE categorias;
CREATE TABLE categorias (
cd_categoria INTEGER(3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nm_categoria VARCHAR(30) NOT NULL,
cd_categoria INTEGER(3) NOT NULL
);

DROP TABLE topicos;
CREATE TABLE topicos (
cd_topico INTEGER(3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nm_topico VARCHAR(30) NOT NULL,
cd_categoria INTEGER(3) NOT NULL
);

DROP TABLE conteudos;
CREATE TABLE conteudos (
cd_conteudo INTEGER(3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nm_conteudo VARCHAR(30) NOT NULL,
dt_publicacao DATE NOT NULL,
cd_topico INTEGER(3) NOT NULL,
cd_imagem INTEGER(3) NOT NULL
);

DROP TABLE imagens;
CREATE TABLE imagens (
cd_imagem INTEGER(3) PRIMARY KEY NOT NULL,
im_imagem BLOB;
ds_legenda VARCHAR(200),
cd_conteudo INTEGER(3) NOT NULL
);

DROP TABLE favoritos;
CREATE TABLE favoritos (
cd_usuario INTEGER(3) NOT NULL,
cd_conteudo INTEGER(3) NOT NULL
):

ALTER TABLE topico ADD CONSTRAINT cd_categoria FOREIGN KEY (cd_categoria) REFERENCES categorias(cd_categoria);

ALTER TABLE conteudos ADD CONSTRAINT cd_topico FOREIGN KEY (cd_topico) REFERENCES topico(cd_topico);
ALTER TABLE conteudos ADD CONSTRAINT cd_imagem FOREIGN KEY (cd_imagem) REFERENCES imagens(cd_imagem);

ALTER TABLE imagens ADD CONSTRAINT cd_conteudo FOREIGN KEY (cd_conteudo) REFERENCES conteudo(cd_conteudo);

ALTER TABLE favoritos ADD CONSTRAINT cd_usuario FOREIGN KEY (cd_usuario) REFERENCES usuarios(cd_usuario);
ALTER TABLE favoritos ADD CONSTRAINT cd_conteudo FOREIGN KEY (cd_conteudo) REFERENCES conteudos(cd_conteudo);
ALTER TABLE favoritos CONSTRAINT cd_favorito PRIMARY KEY (cd_usuario, cd_conteudo);
