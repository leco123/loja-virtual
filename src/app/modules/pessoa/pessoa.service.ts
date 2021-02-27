import { Pessoa } from './../models/pessoa';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentReference, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class PessoaService {

  constructor(public firestore: AngularFirestore) { }

  public inserir(pessoa: Pessoa): any {

      this.firestore.collection<Pessoa>('dadosPessoa').add(pessoa)
      .then((pessoa: Pessoa) => {
        //console.log('then', pessoa);
      })
      .catch((err) => {
        return  `Opss!!! falha ao tentar cadastrar usuário ${pessoa.nome}!`;
      })
      .finally(() => {
        return  `Usuário ${pessoa.nome} cadastrado com sucesso!`;
      });
      return null;
  }

  public retornaTodasAsPessoas(): Observable<DocumentChangeAction<Pessoa>[]> {
    return this.firestore.collection<Pessoa>('dadosPessoa').snapshotChanges();
  }

  public update(pessoa: Pessoa, id: string): void {
      delete pessoa.id;
      this.firestore.doc(`dadosPessoa/` + pessoa.id).update(pessoa);
  }

  public delete(pessoa: Pessoa): void {
    this.firestore.doc(`dadosPessoa/` + pessoa).delete();
  }
}
