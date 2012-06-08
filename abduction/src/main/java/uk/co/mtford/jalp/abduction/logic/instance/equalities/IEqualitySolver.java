package uk.co.mtford.jalp.abduction.logic.instance.equalities;

import uk.co.mtford.jalp.abduction.logic.instance.IUnifiableAtomInstance;
import uk.co.mtford.jalp.abduction.logic.instance.term.VariableInstance;

import java.util.List;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: mtford
 * Date: 08/06/2012
 * Time: 16:13
 * To change this template use File | Settings | File Templates.
 */
public interface IEqualitySolver {
    public boolean executeSolver(Map<VariableInstance,IUnifiableAtomInstance> subst,  List<IEqualityInstance> equalities);
}
