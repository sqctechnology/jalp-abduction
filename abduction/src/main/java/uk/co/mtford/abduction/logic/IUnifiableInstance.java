/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package uk.co.mtford.abduction.logic;


/**
 *
 * @author mtford
 */
public interface IUnifiableInstance extends Cloneable, LogicInstance {
    public Object clone();
    public boolean equalitySolve(IUnifiableInstance other);
}
