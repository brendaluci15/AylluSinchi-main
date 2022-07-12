/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package upeu.ayllusinchi.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Data;

/**
 *
 * @author Usuario
 */
@Data
@Entity
@Table(name = "asistencia")
public class Asistencia implements Serializable  {
    
    @Id
    @Column(name = "asis_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long asisId;
    
    @Column(name = "asis_nombres")
    private String asisNombres;
    
    @Column(name = "asis_apellidos")
    private String asisApellidos;
    
    @ManyToOne
    @JoinColumn(name = "tido_id")
    private TipoDocumento tipoDocumento;
    
    @Column(name = "asis_numdocu")
    private String asisNumdocu;
    
    @ManyToOne
    @JoinColumn(name = "prog_id")
    private Programa programa;
    
    @ManyToOne
    @JoinColumn(name = "tall_id")
    private Taller taller;
    
    @Column(name = "asis_presente")
    private String asisPresente;
}
