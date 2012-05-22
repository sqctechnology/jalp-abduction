/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package uk.co.mtford.jalp.abduction.logic.instance;

import org.apache.log4j.Logger;

import java.util.*;

/**
 * @author mtford
 */
public class ConstantInstance implements ITermInstance {

    private static final Logger LOGGER = Logger.getLogger(ConstantInstance.class);

    private String value;

    public ConstantInstance(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    /**
     * Equality solve c=v or deal with variable already being assigned.
     *
     * @param other
     * @param assignment
     * @return
     */
    @Override
    public List<IEqualitySolverResultInstance> equalitySolve(VariableInstance other, Map<VariableInstance, IUnifiableAtomInstance> assignment) {
        LinkedList<IEqualitySolverResultInstance> result = new LinkedList<IEqualitySolverResultInstance>();
        if (!assignment.containsKey(other)) { //c=v
            assignment.put(other, this);
            return result;
        } else { // Find current assignment.
            return assignment.get(other).equalitySolve(this, assignment);
        }
    }

    @Override
    public List<IEqualitySolverResultInstance> equalitySolve(ConstantInstance other, Map<VariableInstance, IUnifiableAtomInstance> assignment) {
        LinkedList<IEqualitySolverResultInstance> result = new LinkedList<IEqualitySolverResultInstance>();
        if (this.equals(other)) result.add(new TrueInstance()); // Same constant.
        else result.add(new FalseInstance()); // Different constant.
        return result;
    }

    @Override
    public List<IEqualitySolverResultInstance> equalitySolve(PredicateInstance other, Map<VariableInstance, IUnifiableAtomInstance> assignment) {
        LinkedList<IEqualitySolverResultInstance> result = new LinkedList<IEqualitySolverResultInstance>();
        result.add(new FalseInstance()); //
        return result;
    }

    @Override
    public List<IEqualitySolverResultInstance> equalitySolve(IUnifiableAtomInstance other, Map<VariableInstance, IUnifiableAtomInstance> assignment) {
        return other.equalitySolve(this, assignment);
    }

    @Override
    public IFirstOrderLogicInstance performSubstitutions(Map<VariableInstance, IUnifiableAtomInstance> substitutions) {
        return this;
    }

    @Override
    public IFirstOrderLogicInstance deepClone(Map<VariableInstance, IUnifiableAtomInstance> substitutions) {
        return new ConstantInstance(value);
    }

    @Override
    public IFirstOrderLogicInstance shallowClone() {
        return new ConstantInstance(value);
    }

    @Override
    public Set<VariableInstance> getVariables() {
        return new HashSet<VariableInstance>();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ConstantInstance)) return false;

        ConstantInstance that = (ConstantInstance) o;

        if (!value.equals(that.value)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }


    @Override
    public String toString() {
        return value;
    }


}