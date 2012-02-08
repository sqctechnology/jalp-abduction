/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package uk.co.mtford.abduction.logic;

import java.util.Map;

/**
 *
 * @author mtford
 */
public class Variable implements Term {
    String name;
    IUnifiable value;

    public Variable(String name, IUnifiable value) {
        this.name = name;
        this.value = value;
    }

    public Variable(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public IUnifiable getValue() {
        return value;
    }

    public void setValue(IUnifiable value) {
        this.value = value;
    }
    
    public boolean isAssigned() {
        return value!=null;
    }
    
    @Override
    public String toString() {
        return name;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Variable other = (Variable) obj;
        if ((this.name == null) ? (other.name != null) : !this.name.equals(other.name)) {
            return false;
        }
        return true;
    }

    /** Returns true if variable names at the same. Not concerned with value. */
    

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + (this.name != null ? this.name.hashCode() : 0);
        hash = 89 * hash + (this.value != null ? this.value.hashCode() : 0);
        return hash;
    }

    @Override
    public Object clone() {
        String clonedName = new String(name);
        IUnifiable clonedValue = null;
        if (value!=null) {
            clonedValue = (IUnifiable) value.clone();
        }
        return new Variable(clonedName,clonedValue);
    }
    
    
}
